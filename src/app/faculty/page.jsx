"use client";
import React, { useState, useEffect } from "react";
import NavbarComponent from "./navbar";
import Button from "@material-tailwind/react/components/Button";
import { db, storage } from "@/app/firebase";
import { uploadBytesResumable, listAll, getMetadata } from "firebase/storage";
import { useRouter } from "next/navigation";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import Alert from "@material-tailwind/react/components/Alert";
import { Progress, Typography } from "@material-tailwind/react";
import Card from "@material-tailwind/react/components/Card";
import CardHeader from "@material-tailwind/react/components/Card/CardHeader";
import CardBody from "@material-tailwind/react/components/Card/CardBody";
import CardFooter from "@material-tailwind/react/components/Card/CardFooter";
import Input from "@material-tailwind/react/components/Input";
import Image from "next/image";
import { auth } from "@/app/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  query,
  where,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function UserHomepage() {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);
  const [file5, setFile5] = useState(null);
  const [file6, setFile6] = useState(null);
  const [file7, setFile7] = useState(null);
  const [file8, setFile8] = useState(null);
  const [file9, setFile9] = useState(null);

  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadedUrl, setUploadedUrl] = useState(null);
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
            console.log("User email:", userEmail);
            const db = getFirestore();
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
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = user.uid;
        setUserID(userId);
        fetchUserFiles(userId);
      } else {
        setUserID(null);
        setUserFiles([]);
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchUserFiles = async (userId) => {
    try {
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
      const userFilesData = [];
      for (const category of categories) {
        const q = query(
          collection(db, `faculty/files/${category}`),
          where("user_id", "==", userId)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          userFilesData.push({ category, name: doc.data().name });
        });
      }
      console.log("User files data:", userFilesData);
      setUserFiles(userFilesData);
    } catch (error) {
      console.error("Error fetching user files:", error);
    }
  };

  const setFolderNameBasedOnFiles = () => {
    if (file) {
      setFolderName("Diploma");
      return;
    }
    if (file2) {
      setFolderName("Official Transcript of Records(TOR)");
      return;
    }
    if (file3) {
      setFolderName("Certificate of attendance to trainings or seminars");
      return;
    }
    if (file4) {
      setFolderName(
        "Certificate of Employment of the employee from the previous employer"
      );
      return;
    }
    if (file5) {
      setFolderName("National Certifications or Licenses and board rating");
      return;
    }
    if (file6) {
      setFolderName("Rating Form for Academic Qualification");
      return;
    }
    if (file7) {
      setFolderName("Copy of the research output or abstract");
      return;
    }
    if (file8) {
      setFolderName("Appointment papers of hired employees");
      return;
    }
    if (file9) {
      setFolderName("Certificate of participation in community involvement");
      return;
    }
  };

  useEffect(() => {
    setFolderNameBasedOnFiles();
  }, [file, file2, file3, file4, file5, file6, file7, file8, file9]);

  const handleFileChange = (event, setter) => {
    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword",
    ];
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile) {
      if (!allowedTypes.includes(selectedFile.type)) {
        setError(
          "Unsupported file type. Please select a PDF, DOC, or DOCX file."
        );
      } else {
        setter(selectedFile);
        setError("");
      }
    }
  };

  const handleUpload = async (file) => {
    const user = auth.currentUser;
    const user_id = user.uid;
    setUserID(user_id);
    if (!file || !user) return;
    const storageRef = ref(
      storage,
      `files/${user_id}/${folderName}/${file.name}`
    );
    try {
      await getMetadata(storageRef);
      setError(`File already exists.`);
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
        progress.toFixed(0);
        setProgress(progress);
      },
      (error) => {
        setError(`There is an error uploading the file`);
        setUploading(false);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setUploadedUrl(downloadURL);
          setUploading(false);
          await addDoc(collection(db, `faculty/files/${folderName}`), {
            user_id: user_id,
            name: file.name,
            url: downloadURL,
            timestamp: serverTimestamp(),
          });
          setFile(null);
          setFile2(null);
          setFile3(null);
          setFile4(null);
          setFile5(null);
          setFile6(null);
          setFile7(null);
          setFile8(null);
          setFile9(null);
          console.log("File upload successful and metadata added to Firestore");
        } catch (error) {
          setError(`There is an error uploading the file`);
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
    if (!profilePhoto) return;
    try {
      const storageRef = ref(
        storage,
        "profileImages/" + userid + profilePhoto.name
      );
      await uploadBytes(storageRef, profilePhoto);
      const downloadURL = await getDownloadURL(storageRef);
      console.log("Image uploaded:", downloadURL);
      const db = getFirestore();
      const userRef = collection(db, "userdata");
      const userQuery = query(userRef, where("userID", "==", userid));
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
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  return (
    <>
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
              <h2 className="text-black mr-2 mb-2">Diploma:</h2>
              <div className="relative flex w-full max-w-96 items-center">
                <Input
                  type="file"
                  size="md"
                  onChange={(e) => handleFileChange(e, setFile)}
                  className="pr-20 pt-2"
                  containerProps={{
                    className: "min-w-0",
                  }}
                  placeholder={undefined}
                  crossOrigin={undefined}
                />
                <Button
                  size="sm"
                  disabled={!file || uploading}
                  color={file ? "green" : "gray"}
                  className="!absolute right-1 top-1 rounded bg-green-900"
                  placeholder={undefined}
                  onClick={() => handleUpload(file)}
                >
                  Submit
                </Button>
              </div>

              <h2 className="text-black mr-2 mt-2 mb-2">
                Official Transcript of Record(TOR):
              </h2>
              <div className="relative flex w-full max-w-96 items-center">
                <Input
                  type="file"
                  size="md"
                  onChange={(e) => handleFileChange(e, setFile2)}
                  className="pr-20 pt-2"
                  containerProps={{
                    className: "min-w-0",
                  }}
                  placeholder={undefined}
                  crossOrigin={undefined}
                />
                <Button
                  size="sm"
                  disabled={!file2 || uploading}
                  color={file2 ? "green" : "gray"}
                  className="!absolute right-1 top-1 rounded bg-green-900"
                  placeholder={undefined}
                  onClick={() => handleUpload(file2)}
                >
                  Submit
                </Button>
              </div>
              <h2 className="text-black mr-2 mt-2">
                Certificate of attendance to trainings/seminars
              </h2>
              <h2 className="text-black mr-2 mb-2">
                (aligned to the fields of specialization):
              </h2>
              <div className="relative flex w-full max-w-96 items-center">
                <Input
                  type="file"
                  size="md"
                  onChange={(e) => handleFileChange(e, setFile3)}
                  className="pr-20 pt-2"
                  containerProps={{
                    className: "min-w-0",
                  }}
                  placeholder={undefined}
                  crossOrigin={undefined}
                />
                <Button
                  size="sm"
                  disabled={!file3 || uploading}
                  color={file3 ? "green" : "gray"}
                  className="!absolute right-1 top-1 rounded bg-green-900"
                  placeholder={undefined}
                  onClick={() => handleUpload(file3)}
                >
                  Submit
                </Button>
              </div>

              <h2 className="text-black mr-2 mt-2 ">
                Certificate of Employment of the
              </h2>
              <h2 className="text-black mr-2 mb-2">
                {" "}
                employee from the previous employer:
              </h2>
              <div className="relative flex w-full max-w-96 items-center">
                <Input
                  type="file"
                  size="md"
                  onChange={(e) => handleFileChange(e, setFile4)}
                  className="pr-20 pt-2"
                  containerProps={{
                    className: "min-w-0",
                  }}
                  placeholder={undefined}
                  crossOrigin={undefined}
                />
                <Button
                  size="sm"
                  disabled={!file4 || uploading}
                  color={file4 ? "green" : "gray"}
                  className="!absolute right-1 top-1 rounded bg-green-900"
                  placeholder={undefined}
                  onClick={() => handleUpload(file4)}
                >
                  Submit
                </Button>
              </div>

              <h2 className="text-black mr-2 mt-2 mb-2">
                National Certifications/Licenses and board rating:
              </h2>
              <div className="relative flex w-full max-w-96 items-center">
                <Input
                  type="file"
                  size="md"
                  onChange={(e) => handleFileChange(e, setFile5)}
                  className="pr-20 pt-2"
                  containerProps={{
                    className: "min-w-0",
                  }}
                  placeholder={undefined}
                  crossOrigin={undefined}
                />
                <Button
                  size="sm"
                  disabled={!file5 || uploading}
                  color={file5 ? "green" : "gray"}
                  className="!absolute right-1 top-1 rounded bg-green-900"
                  placeholder={undefined}
                  onClick={() => handleUpload(file5)}
                >
                  Submit
                </Button>
              </div>

              <h2 className="text-black mr-2 mt-2 mb-2">
                Rating Form for Academic Qualification:
              </h2>
              <div className="relative flex w-full max-w-96 items-center">
                <Input
                  type="file"
                  size="md"
                  onChange={(e) => handleFileChange(e, setFile6)}
                  className="pr-20 pt-2"
                  containerProps={{
                    className: "min-w-0",
                  }}
                  placeholder={undefined}
                  crossOrigin={undefined}
                />
                <Button
                  size="sm"
                  disabled={!file6 || uploading}
                  color={file6 ? "green" : "gray"}
                  className="!absolute right-1 top-1 rounded bg-green-900"
                  placeholder={undefined}
                  onClick={() => handleUpload(file6)}
                >
                  Submit
                </Button>
              </div>

              <h2 className="text-black mr-2 mt-2 mb-2">
                Copy of the research output or abstract :
              </h2>
              <div className="relative flex w-full max-w-96 items-center">
                <Input
                  type="file"
                  size="md"
                  onChange={(e) => handleFileChange(e, setFile7)}
                  className="pr-20 pt-2"
                  containerProps={{
                    className: "min-w-0",
                  }}
                  placeholder={undefined}
                  crossOrigin={undefined}
                />
                <Button
                  size="sm"
                  disabled={!file7 || uploading}
                  color={file7 ? "green" : "gray"}
                  className="!absolute right-1 top-1 rounded bg-green-900"
                  placeholder={undefined}
                  onClick={() => handleUpload(file7)}
                >
                  Submit
                </Button>
              </div>

              <h2 className="text-black mr-2 mt-2 mb-2">
                Appointment papers of hired employees:
              </h2>
              <div className="relative flex w-full max-w-96 items-center">
                <Input
                  type="file"
                  size="md"
                  onChange={(e) => handleFileChange(e, setFile8)}
                  className="pr-20 pt-2"
                  containerProps={{
                    className: "min-w-0",
                  }}
                  placeholder={undefined}
                  crossOrigin={undefined}
                />
                <Button
                  size="sm"
                  disabled={!file8 || uploading}
                  color={file8 ? "green" : "gray"}
                  className="!absolute right-1 top-1 rounded bg-green-900"
                  placeholder={undefined}
                  onClick={() => handleUpload(file8)}
                >
                  Submit
                </Button>
              </div>

              <h2 className="text-black mr-2 mt-2 mb-2">
                Certificate of partiipation in community involvement:
              </h2>
              <div className="relative flex w-full max-w-96 items-center">
                <Input
                  type="file"
                  size="md"
                  onChange={(e) => handleFileChange(e, setFile9)}
                  className="pr-20 pt-2"
                  containerProps={{
                    className: "min-w-0",
                  }}
                  placeholder={undefined}
                  crossOrigin={undefined}
                />
                <Button
                  size="sm"
                  disabled={!file9 || uploading}
                  color={file9 ? "green" : "gray"}
                  className="!absolute right-1 top-1 rounded bg-green-900"
                  placeholder={undefined}
                  onClick={() => handleUpload(file9)}
                >
                  Submit
                </Button>
              </div>
            </CardBody>
          </Card>
          <Card className="w-[1000px] h-full">
            <Typography color="blue-gray" className="text-center">
              Files Uploaded
            </Typography>
            <div className="grid grid-cols-3 gap-2">
              {categories.map((category, index) => (
                <div key={index}>
                  <Typography color="blue-gray" className="text-center">
                    {category}
                  </Typography>
                  {userFiles.some((file) => file.category === category) ? (
                    <div>
                      {userFiles
                        .filter((file) => file.category === category)
                        .map((file, idx) => (
                          <Typography
                            key={idx}
                            color="red"
                            className="text-center"
                          >
                            {file.name}
                          </Typography>
                        ))}
                    </div>
                  ) : (
                    <Typography color="red" className="text-center">
                      There are no files uploaded.
                    </Typography>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
