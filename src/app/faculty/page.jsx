"use client";
import React, { useState, useEffect } from "react";
import NavbarComponent from "./navbar";
import Button from "@material-tailwind/react/components/Button";
import { db, storage, auth } from "@/app/firebase";
import {
  uploadBytesResumable,
  getMetadata,
  getDownloadURL,
  deleteObject,
  ref,
  uploadBytes,
} from "firebase/storage";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  query,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { Progress, Typography } from "@material-tailwind/react";
import Card from "@material-tailwind/react/components/Card";
import CardBody from "@material-tailwind/react/components/Card/CardBody";
import Input from "@material-tailwind/react/components/Input";
import Image from "next/image";
import { onAuthStateChanged } from "firebase/auth";
import { Select, Option } from "@material-tailwind/react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { DocumentTextIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  getAuth,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function UserHomepage() {
  const [files, setFiles] = useState(Array(9).fill(null));
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [userFiles, setUserFiles] = useState([]);
  const [error, setError] = useState("");
  const [folderName, setFolderName] = useState("");
  const [userid, setUserID] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const categories = [
    "Diploma",
    "Official Transcript of Records(TOR)",
    "Certificate of attendance to trainings or seminars",
    "Certificate of Employment of the employee from the previous employer",
    "National Certifications or Licenses and board rating",
    "Rating Form for Academic Qualification",
    "Copy of the research output or abstract",
    "Appointment papers of hired employees",
    "Certificate of participation in community involvement",
  ];

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        auth.onAuthStateChanged(async (currentUser) => {
          if (currentUser) {
            const userEmail = currentUser.email;
            const userQuery = query(
              collection(db, "userdata"),
              where("email", "==", userEmail)
            );
            const querySnapshot = await getDocs(userQuery);
            if (!querySnapshot.empty) {
              querySnapshot.forEach((doc) => {
                const userData = doc.data();
                setName(userData.name);
                setEmail(userData.email);
                setProfileUrl(userData.profileUrl);
                setDepartment(userData.department);
                setStatus(userData.status);
              });
            } else {
              console.error("User not found or role not specified");
            }
          }
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [profileUrl]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = user.uid;
        setUserID(userId);
        const unsubscribeFiles = fetchUserFiles(userId);
        return () => {
          unsubscribeFiles();
        };
      } else {
        setUserID(null);
        setUserFiles([]);
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchUserFiles = (userId) => {
    const userFilesData = [];
    const unsubscribes = [];

    categories.forEach((category) => {
      const q = query(
        collection(db, `faculty/files/${category}`),
        where("user_id", "==", userId)
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            userFilesData.push({
              id: change.doc.id,
              category: category,
              name: change.doc.data().name,
              url: change.doc.data().url,
            });
          }
          if (change.type === "removed") {
            const index = userFilesData.findIndex(
              (file) => file.id === change.doc.id
            );
            if (index !== -1) {
              userFilesData.splice(index, 1);
            }
          }
        });
        setUserFiles([...userFilesData]);
      });
      unsubscribes.push(unsubscribe);
    });

    return () => {
      unsubscribes.forEach((unsubscribe) => unsubscribe());
    };
  };

  const setFolderNameBasedOnFiles = () => {
    const fileIndex = files.findIndex((file) => file !== null);
    if (fileIndex !== -1) {
      setFolderName(categories[fileIndex]);
    }
  };

  useEffect(() => {
    setFolderNameBasedOnFiles();
  }, [files]);

  const handleFileChange = (event, index) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const allowedTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/msword",
      ];
      if (!allowedTypes.includes(selectedFile.type)) {
        setError(
          "Unsupported file type. Please select a PDF, DOC, or DOCX file."
        );
      } else {
        const newFiles = [...files];
        newFiles[index] = selectedFile;
        setFiles(newFiles);
        setError("");
      }
    }
  };

  const handleUpload = async (index) => {
    const file = files[index];
    const user = auth.currentUser;
    const user_id = user.uid;
    const user_email = user.email;

    setUserID(user_id);
    if (!file || !user) return;
    const q = query(
      collection(db, "userdata"),
      where("email", "==", user_email)
    );
    const querySnapshot = await getDocs(q);
    let userName = "";
    querySnapshot.forEach((doc) => {
      userName = doc.data().name;
    });

    const storageRef = ref(
      storage,
      `files/${user_id}/${folderName}/${file.name}`
    );
    try {
      await getMetadata(storageRef);
      setError("File already exists.");
      return;
    } catch (error) {
      setError("");
    }
    const uploadTask = uploadBytesResumable(storageRef, file);
    setUploading(true);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress.toFixed(0));
      },
      (error) => {
        setError("There is an error uploading the file");
        setUploading(false);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setUploading(false);
          await addDoc(collection(db, `faculty/files/${folderName}`), {
            user_id: user_id,
            user_name: userName,
            name: file.name,
            url: downloadURL,
            timestamp: serverTimestamp(),
          });
          await addDoc(collection(db, `filesdata`), {
            user_id: user_id,
            user_name: userName,
            name: file.name,
            url: downloadURL,
            categories: folderName,
            timestamp: serverTimestamp(),
          });
          setFiles(Array(9).fill(null));
          setSelectedCategory("");
          console.log("File upload successful and metadata added to Firestore");
        } catch (error) {
          setError("There is an error uploading the file");
          setUploading(false);
        }
      }
    );
  };

  const handleFileChange2 = (event) => {
    const file = event.target.files[0];
    setProfilePhoto(file);
  };

  const handleUpload2 = async () => {
    const user = auth.currentUser;
    const user_email = user.email;
    if (!profilePhoto) return;
    try {
      setUploading(true);
      setProgress(0);
      const storageRef = ref(
        storage,
        `profileImages/${userid}/${profilePhoto.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, profilePhoto);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          console.error("Error uploading image:", error);
          setUploading(false);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          const userRef = collection(db, "userdata");
          const userQuery = query(userRef, where("email", "==", user_email));
          const userSnapshot = await getDocs(userQuery);

          if (!userSnapshot.empty) {
            userSnapshot.forEach(async (doc) => {
              const userDocRef = doc.ref;
              try {
                await updateDoc(userDocRef, {
                  profileUrl: downloadURL,
                });
                console.log("Profile URL updated in Firestore");
              } catch (error) {
                console.error("Error updating profile URL:", error);
              }
            });
          } else {
            console.error("User not found");
          }

          setUploading(false);
          setProfilePhoto(null);
        }
      );
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploading(false);
    }
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handleDeleteFile = async (file) => {
    if (!window.confirm(`Are you sure you want to delete ${file.name}?`))
      return;
    try {
      if (!file.url) {
        console.error("File URL is missing");
        return;
      }
      const fileRef = ref(storage, file.url);
      await deleteObject(fileRef);
      console.log("File deleted successfully");
      await deleteDoc(doc(db, `faculty/files/${file.category}`, file.id));
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  const handleChangePassword = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      const Emailcredential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
      await reauthenticateWithCredential(user, Emailcredential);
      console.log("Credential:", Emailcredential);

      if (newPassword !== confirmPassword) {
        console.error("New password and confirm password do not match");
        return;
      }
      await updatePassword(user, newPassword).then(() => {
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      });
    } catch (error) {
      console.error("Error updating password:", error);
    }
  };

  return (
    <>
      {uploading && <Progress value={progress} color="green" className="h-2" />}
      <NavbarComponent />
      <div className="flex min-h-full flex-1 flex-col justify-center items-center py-10 sm:px-6 lg:px-8">
        <Typography variant="h2" className="mb-4 text-center">
          User Profile
        </Typography>
        <div className="flex items-start justify-center space-x-8">
          <Card className="relative w-96 h-full p-4">
            <div className="absolute top-0 left-0 flex items-center justify-start">
              {profileUrl ? (
                <Image
                  src={profileUrl}
                  width={100}
                  height={100}
                  alt="User Picture"
                  className="rounded-full object-cover"
                />
              ) : (
                <Image
                  src="/Avatar.jpg"
                  width={100}
                  height={100}
                  alt="User Picture"
                  className="rounded-full object-cover"
                />
              )}
              <div className="ml-4">
                <Typography color="blue-gray">Name: {name}</Typography>
                <Typography color="blue-gray">Email: {email}</Typography>
                <Typography color="blue-gray">
                  Department: {department}
                </Typography>
                <Typography color="blue-gray">Status: {status}</Typography>
              </div>
            </div>
            <div className="mt-20"></div>
            <div className="mt-10"></div>
            <Input type="file" onChange={handleFileChange2}></Input>
            <div className="mt-5"></div>
            <Button onClick={handleUpload2}>Upload Profile Photo</Button>
            <CardBody>
              <h2 className="text-black mr-2 mb-2 text-center">
                Requirements:
              </h2>
              <Select
                label="Select Category"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                {categories.map((category, index) => (
                  <Option key={index} value={category}>
                    {category}
                  </Option>
                ))}
              </Select>
              {selectedCategory && (
                <>
                  <h2 className="text-black mr-2 mt-4 mb-2">
                    {selectedCategory}:
                  </h2>
                  <div className="relative flex w-full max-w-96 items-center">
                    <Input
                      type="file"
                      size="md"
                      onChange={(e) =>
                        handleFileChange(
                          e,
                          categories.indexOf(selectedCategory)
                        )
                      }
                      className="pr-20 pt-2"
                      containerProps={{
                        className: "min-w-0",
                      }}
                    />
                    <Button
                      size="sm"
                      disabled={
                        !files[categories.indexOf(selectedCategory)] ||
                        uploading
                      }
                      color={
                        files[categories.indexOf(selectedCategory)]
                          ? "green"
                          : "gray"
                      }
                      className="!absolute right-1 top-1 rounded bg-green-900"
                      onClick={() =>
                        handleUpload(categories.indexOf(selectedCategory))
                      }
                    >
                      Submit
                    </Button>
                  </div>
                </>
              )}
              <div className="mt-10"></div>
              <Typography
                color="gray"
                className="text-xl font-bold mb-5 text-center"
              >
                Change Password
              </Typography>
              <div className="flex flex-col space-y-2">
                <Typography color="gray" className="font-bold mb-2 ">
                  Current Password:
                </Typography>
                <Input
                  label="Enter The Current Password"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                ></Input>
                <Typography color="gray" className="font-bold mb-2 ">
                  New Password:
                </Typography>
                <Input
                  label="Enter The New Password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                ></Input>
                <Typography color="gray" className="font-bold mb-2 ">
                  Confirm New Password:
                </Typography>
                <Input
                  label="Confirm the New Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Input>
              </div>
              <Button className="mt-5" onClick={handleChangePassword}>
                Submit
              </Button>
            </CardBody>
          </Card>
          <Card className="w-[1000px] h-full">
            <Typography color="blue-gray" className="text-center">
              Files Uploaded
            </Typography>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category, index) => (
                <div key={index} className="p-2">
                  <div className="flex items-center justify-between">
                    <Typography color="blue-gray">{category}</Typography>
                    {userFiles.some((file) => file.category === category) ? (
                      <CheckCircleIcon className="h-6 w-6 text-green-500" />
                    ) : (
                      <XCircleIcon className="h-6 w-6 text-red-500" />
                    )}
                  </div>
                  <div className="mt-2">
                    {userFiles
                      .filter((file) => file.category === category)
                      .map((file, fileIndex) => (
                        <div
                          key={fileIndex}
                          className="flex items-center justify-between text-sm text-gray-600"
                        >
                          {file.name}
                          <div className="flex items-center space-x-2">
                            <DocumentTextIcon
                              className="h-5 w-5 text-blue-500 cursor-pointer"
                              onClick={() => window.open(file.url, "_blank")}
                            />
                            <TrashIcon
                              className="h-5 w-5 text-red-500 cursor-pointer"
                              onClick={() => handleDeleteFile(file)}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
