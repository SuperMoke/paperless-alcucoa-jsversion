"use client";
import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { auth } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  query,
  collection,
  where,
  getDocs,
} from "firebase/firestore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const db = getFirestore();
      const userQuery = query(
        collection(db, "userdata"),
        where("email", "==", email)
      );
      const userSnapshot = await getDocs(userQuery);
      if (!userSnapshot.empty) {
        userSnapshot.forEach((doc) => {
          const userData = doc.data();
          const role = userData.role;
          if (role === "admin") {
            router.push("/admin");
          } else if (role === "faculty") {
            router.push("/faculty");
          } else {
            console.error("Role not specified");
          }
        });
      } else {
        console.error("User not found or role not specified");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
        <Card
          color="transparent"
          shadow={false}
          className="w-full max-w-md mt-20"
        >
          <div className="flex justify-center">
            <Image
              src="/cca-logo.png"
              width={100}
              height={100}
              alt="CCA Logo"
            />
          </div>
          <Typography variant="h4" color="blue-gray" className="text-center">
            Sign In
          </Typography>
          <Typography color="gray" className="mt-1 font-normal text-center">
            Enter your details to login.
          </Typography>
          <div className="mt-8 mb-2 max-w-screen-lg sm:w-96 mx-auto">
            <div className="mb-4 flex flex-col gap-6">
              <Input
                size="lg"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                size="lg"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              className="mt-6 bg-green-900"
              fullWidth
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}
