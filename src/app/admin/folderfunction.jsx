import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "@/app/firebase";
import { Button } from "@material-tailwind/react/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons/faFolder";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase";

const FolderFunction = ({
  currentFolder,
  setCurrentFolder,
  setfolderName,
  hideFolderUploader,
}) => {
  const [userFolders, setUserFolders] = useState([]);
  const router = useRouter();

  const handleFolderClick = (folderName) => {
    setCurrentFolder(folderName);
    hideFolderUploader();
  };

  useEffect(() => {
    const fetchUserFolders = async (email) => {
      const userFoldersRef = collection(db, `users/${email}/folders`);
      const querySnapshot = await getDocs(
        query(userFoldersRef, orderBy("name", "asc"))
      );
      const fetchedFolders = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }));
      setUserFolders(fetchedFolders);
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const email = user.email;
        fetchUserFolders(email);
      } else {
        // User is signed out
        setUserFolders([]);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-6 py-3">
        {userFolders.length > 0 && (
          <div className="flex  flex-col justify-center lg:px-8 mx-auto max-w-screen-xl px-6 py-3">
            <ul className="text-blue-gray-900 flex flex-col flex-wrap">
              {userFolders.map((folder) => (
                <li
                  key={folder.id}
                  className="mr-3 mb-3 flex flex-row items-center"
                >
                  <Button
                    color="blue"
                    size="sm"
                    onClick={() => handleFolderClick(folder.name)}
                    placeholder={undefined}
                  >
                    <FontAwesomeIcon icon={faFolder} size="3x" />
                  </Button>
                  <span className="mt-1 ml-2 text-center" title={folder.name}>
                    {folder.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FolderFunction;
