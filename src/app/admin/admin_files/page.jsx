"use client";
import NavbarComponent from "../navbar";
import {
  Typography,
  Card,
  CardBody,
  Select,
  Option,
  Button,
  Input,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import {
  getDocs,
  collection,
  addDoc,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  getMetadata,
} from "firebase/storage";
import { auth, db, storage } from "@/app/firebase";

export default function AdminFiles() {
  const [files, setFiles] = useState([]);
  const [facultyFiles, setFacultyFiles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [facultyOptions, setFacultyOptions] = useState([]); // New state for faculty options
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

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
    const fetchFiles = async () => {
      const filesRef = collection(db, "filesdata");
      const snapshot = await getDocs(filesRef);
      const filesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setFiles(filesData);

      if (selectedFaculty === "All") {
        setFacultyFiles(filesData);
      } else {
        setFacultyFiles(
          filesData.filter((file) => file.user_name === selectedFaculty)
        );
      }
    };

    fetchFiles();
  }, [selectedFaculty]);

  // New useEffect to fetch faculty options based on user roles
  useEffect(() => {
    const fetchFacultyOptions = async () => {
      const q = query(
        collection(db, "userdata"),
        where("role", "==", "faculty")
      );
      const querySnapshot = await getDocs(q);
      const faculties = querySnapshot.docs.map((doc) => doc.data().name);
      setFacultyOptions(faculties);
    };

    fetchFacultyOptions();
  }, []);

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
      `files/${user_id}/${selectedCategory}/${file.name}`
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
          await addDoc(collection(db, `faculty/files/${selectedCategory}`), {
            user_id,
            user_name: userName,
            name: file.name,
            url: downloadURL,
            timestamp: serverTimestamp(),
          });
          await addDoc(collection(db, "filesdata"), {
            user_id,
            user_name: userName,
            name: file.name,
            url: downloadURL,
            categories: selectedCategory,
            timestamp: serverTimestamp(),
          });
          setFiles([]);
          setSelectedCategory("");
          console.log("File upload successful and metadata added to Firestore");
        } catch (error) {
          setError("There is an error uploading the file");
          setUploading(false);
        }
      }
    );
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    console.log(value);
  };

  const handleFacultyChange = (value) => {
    setSelectedFaculty(value);
  };

  return (
    <>
      <NavbarComponent />
      <div className="flex min-h-full flex-1 flex-col justify-center items-center py-10 sm:px-6 lg:px-8">
        <Typography variant="h2" className="mb-4 text-center">
          Admin Files
        </Typography>
        <div className="flex flex-col lg:flex-row w-full lg:space-x-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full lg:w-1/2">
            <div className="mb-4">
              <Typography
                variant="h4"
                className="text-lg leading-6 font-medium text-gray-900 mb-4"
              >
                Upload Files
              </Typography>
              <div className="flex flex-col items-center justify-center ">
                <div className="border-2 border-dashed border-gray-400 p-6 rounded-lg w-full text-center mb-5">
                  <Input
                    type="file"
                    size="md"
                    onChange={(e) =>
                      handleFileChange(e, categories.indexOf(selectedCategory))
                    }
                    className="pr-20 pt-2"
                    containerProps={{
                      className: "min-w-0",
                    }}
                  />
                </div>
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
                <Button
                  variant="filled"
                  color="green"
                  className="mt-4"
                  onClick={() => handleUpload(0)}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full lg:w-1/2">
            <div className="mb-4">
              <Typography
                variant="h4"
                className="text-lg leading-6 font-medium text-gray-900 mb-4"
              >
                Search Files
              </Typography>
              <div className="flex items-center justify-between mb-4">
                <Select
                  label="Faculty"
                  value={selectedFaculty}
                  onChange={handleFacultyChange}
                  className="mr-2"
                >
                  {facultyOptions.map((faculty, index) => (
                    <Option key={index} value={faculty}>
                      {faculty}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  {facultyFiles.map((file) => (
                    <li
                      key={file.id}
                      className="px-4 py-4 flex items-center justify-between"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        {file.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {file.timestamp.toDate().toLocaleString(undefined, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                        })}
                      </div>
                      <Button
                        variant="text"
                        color="green"
                        className="ml-4"
                        onClick={() => window.open(file.url, "_blank")}
                      >
                        View
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}