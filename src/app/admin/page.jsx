"use client";
import NavbarComponent from "./navbar";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import {
  getDocs,
  addDoc,
  collection,
  serverTimestamp,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db, auth } from "@/app/firebase";

export default function Admin() {
  const [files, setFiles] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState("");

  useEffect(() => {
    const fetchFiles = () => {
      const filesRef = collection(db, "filesdata");
      const unsubscribe = onSnapshot(filesRef, (snapshot) => {
        const filesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFiles(filesData);
      });
      return unsubscribe;
    };

    const fetchAnnouncements = () => {
      const announcementsRef = collection(db, "announcements");
      const unsubscribe = onSnapshot(announcementsRef, (snapshot) => {
        const announcementsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAnnouncements(announcementsData);
      });
      return unsubscribe;
    };

    fetchFiles();
    fetchAnnouncements();

    const unsubscribeFiles = fetchFiles();
    const unsubscribeAnnouncements = fetchAnnouncements();

    return () => {
      unsubscribeFiles();
      unsubscribeAnnouncements();
    };
  }, []);

  const handlePostAnnouncement = async () => {
    const user = auth.currentUser;
    const user_email = user.email;
    if (newAnnouncement.trim() === "") return;
    const q = query(
      collection(db, "userdata"),
      where("email", "==", user_email)
    );
    const querySnapshot = await getDocs(q);
    let userName = "";
    querySnapshot.forEach((doc) => {
      userName = doc.data().name;
    });

    const announcement = {
      message: newAnnouncement,
      timestamp: serverTimestamp(),
      user: userName,
    };

    const announcementsRef = collection(db, "announcements");
    await addDoc(announcementsRef, announcement);

    setNewAnnouncement("");
  };

  return (
    <>
      <NavbarComponent />
      <div className="flex flex-col justify-center items-center py-10 sm:px-6 lg:px-8">
        <Typography variant="h2" className="mb-4 text-center">
          Admin Dashboard
        </Typography>
        <div className="flex w-full max-w-7xl space-x-6">
          <div className="flex-1 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:px-6">
              <Typography
                variant="h4"
                className="text-lg leading-6 font-medium text-gray-900"
              >
                Bulletin Board
              </Typography>
              <div className="mt-4">
                <Textarea
                  value={newAnnouncement}
                  onChange={(e) => setNewAnnouncement(e.target.value)}
                  placeholder="Write your announcement..."
                  rows={4}
                />
                <Button
                  color="green"
                  className="mt-2"
                  onClick={handlePostAnnouncement}
                >
                  Post
                </Button>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {announcements.map((announcement) => (
                  <li key={announcement.id} className="px-4 py-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-gray-900">
                        {announcement.user}
                      </div>
                      <div className="text-sm text-gray-500">
                        {announcement.timestamp
                          ?.toDate()
                          .toLocaleString(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                          })}
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      {announcement.message}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:px-6">
              <Typography
                variant="h4"
                className="text-lg leading-6 font-medium text-gray-900"
              >
                Notifications
              </Typography>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {files.map((file) => (
                  <li key={file.id} className="px-4 py-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-gray-900">
                        {file.user_name} Uploaded a file
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
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      {file.user_name} uploaded a file under {file.categories}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
