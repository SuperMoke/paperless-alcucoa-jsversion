"use client";
import NavbarComponent from "../navbar";
import {
  Typography,
  Card,
  Input,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { auth, db } from "@/app/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import Modal from "./modal";

export default function AdminAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [accountlevel, setAccountLevel] = useState("");
  const [name, setName] = useState("");
  const [idnumber, setIDnumber] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("");
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const q = query(
      collection(db, "userdata"),
      where("role", "in", ["student", "faculty"])
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const usersList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersList);
    });

    return () => unsubscribe();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential;
      console.log("User created successfully!", user);

      await addDoc(collection(db, "userdata"), {
        name: name,
        email: email,
        department: department,
        idnumber: idnumber,
        position: position,
        status: status,
        role: accountlevel,
      });
      setEmail("");
      setPassword("");
      setDepartment("");
      setName("");
      setIDnumber("");
      setPosition("");
      setStatus("");
      setAccountLevel("");

      console.log("User inserted successfully!");
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <>
      <NavbarComponent />
      <div className="flex min-h-full flex-1 flex-col justify-center items-center py-10 sm:px-6 lg:px-8 bg-gray-100">
        <Typography variant="h4" className="mb-4 text-center">
          Create Account
        </Typography>
        <Card className="w-full max-w-2xl p-8 rounded-md shadow-md">
          <form className="grid grid-cols-2 gap-4" onSubmit={handleFormSubmit}>
            <div>
              <Typography color="gray" className="font-normal mb-1">
                Name
              </Typography>
              <Input
                type="text"
                label="Enter the Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <Typography color="gray" className="font-normal mb-1">
                ID Number
              </Typography>
              <Input
                type="text"
                label="Enter The ID Number"
                value={idnumber}
                onChange={(e) => setIDnumber(e.target.value)}
                required
              />
            </div>
            <div>
              <Typography color="gray" className="font-normal mb-1">
                Email
              </Typography>
              <Input
                type="email"
                label="Enter the Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Typography color="gray" className="font-normal mb-1">
                Position
              </Typography>
              <Input
                type="text"
                label="Enter The Position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              />
            </div>
            <div>
              <Typography color="gray" className="font-normal mb-1">
                Password
              </Typography>
              <Input
                type="password"
                label="Enter The Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <Typography color="gray" className="font-normal mb-1">
                Full Time/Part Time
              </Typography>
              <Select
                label="Select Status"
                value={status}
                onChange={(e) => setStatus(e)}
                required
              >
                <Option value="Full Time">Full Time</Option>
                <Option value="Part Time">Part Time</Option>
              </Select>
            </div>
            <div className="col-span-2">
              <Typography color="gray" className="font-normal mb-1">
                Department
              </Typography>
              <Select
                label="Select Department"
                value={department}
                onChange={(e) => setDepartment(e)}
                required
              >
                <Option value="President Department">
                  President Department
                </Option>
                <Option value="Academic Department">Academic Department</Option>
                <Option value="Research Department">Research Department</Option>
                <Option value="Administrative Department">
                  Administrative Department
                </Option>
              </Select>
              <Typography color="gray" className="font-normal mt-2">
                Account Level
              </Typography>
              <Select
                label="Select Account Level"
                value={accountlevel}
                onChange={(e) => setAccountLevel(e)}
                required
              >
                <Option value="faculty">Faculty</Option>
                <Option value="admin">Admin</Option>
                <Option value="student">Student</Option>
              </Select>
            </div>
            <div className="col-span-2 flex justify-center mt-4">
              <Button type="submit" className=" text-white" color="green">
                Create
              </Button>
            </div>
          </form>
        </Card>
        <Typography variant="h4" className="mb-4 mt-5 text-center">
          Account Management
        </Typography>
        <Card className="w-full max-w-2xl p-8 rounded-md shadow-md mt-5">
          <div className="grid grid-cols-1 gap-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex justify-between items-center p-4 border-b"
              >
                <div>
                  <Typography variant="h6">{user.name}</Typography>
                  <Typography color="gray">{user.position}</Typography>
                  <Typography color="gray">{user.department}</Typography>
                </div>
                <Button color="green" onClick={() => handleEditClick(user)}>
                  Edit
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
      {isModalOpen && <Modal user={selectedUser} onClose={handleModalClose} />}
    </>
  );
}
