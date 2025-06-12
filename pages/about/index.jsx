import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import Loginform from "@/components/form/Loginform.js";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [psswrd, setPsswrd] = useState("");

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", psswrd);

  return (
    <>
      <div className={styles.container}>
        <h1 align="center">Hello {name}</h1>
      </div>

      <br />

      <div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      <br />

      <div>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <br />

      <div>
        <input
          type="password"
          onChange={(e) => setPsswrd(e.target.value)}
          placeholder="Enter Password"
        />
      </div>

      <br />

      <button
        onClick={() => {
          if (psswrd.length < 8) {
            alert("Password must be at least 8 characters long");
          } else {
            alert(`Welcome ${name}!`);
          }
        }}
      >
        Sign Up
      </button>

      <br /><br />

      <Loginform userName={name} userPss={psswrd} />
    </>
  );
}