import React, { useState } from 'react';
import { Card, Typography, Input, Select, Option, Button } from '@material-tailwind/react';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '@/app/firebase'; // Ensure you have your firebase configuration and initialization in this file

const Modal = ({ user, onClose }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [department, setDepartment] = useState(user.department);
  const [idnumber, setIDnumber] = useState(user.idnumber);
  const [position, setPosition] = useState(user.position);
  const [status, setStatus] = useState(user.status);
  const [accountlevel, setAccountLevel] = useState(user.role);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const userDoc = doc(db, 'userdata', user.id); 
      await updateDoc(userDoc, {
        name,
        email,
        department,
        idnumber,
        position,
        status,
        accountlevel
      });
      console.log("User updated:", { name, email, department, idnumber, position, status, accountlevel });
      onClose();
    } catch (error) {
      console.error("Error updating user: ", error);
    }
  };



  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <Card className="w-full max-w-2xl p-8 rounded-md shadow-md bg-white">
        <form className="grid grid-cols-2 gap-4" onSubmit={handleSave}>
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
              <Option value="President Department">President Department</Option>
              <Option value="Academic Department">Academic Department</Option>
              <Option value="Research Department">Research Department</Option>
              <Option value="Administrative Department">Administrative Department</Option>
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
            <Button type="submit" className="text-white mr-5" color="green">
              Update
            </Button>
            <Button onClick={onClose} className="text-white" color="red">
              Close
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Modal;
