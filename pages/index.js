import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");


  function handlepassword(e) {
    setPassword(e.target.value);
  }
  function handlemail(e) {
    setEmail(e.target.value);
  }
  function handlename(a) {
      setName(a.target.value);
  }
  function handlesubmit() {
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
    }
  } 
  return (
    <>
      <head><title>My App</title></head>
      <div>
      Enter your Name <br/>    
      <input type="text" onChange={handlename} /> <br/>
      Enter your Email <br/>
      <input type="email" onChange={handlemail} />
      <br/>
      Enter your Password <br/>
      <input type="password" onChange={handlepassword} /><br/>
      <input type="submit" onClick={handlesubmit}/>
      </div>
      <div align="center">
      <h1>Welcome {name}</h1>
      <h2>Your email is {email}</h2>
      </div>
    </>
  );
}