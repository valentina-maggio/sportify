import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormRegister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:3001/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(userData),
      });

      if (response.status === 200) {
        navigate("/");
      } else {
        alert("User already exists");
      }
    } catch (err) {
      console.error();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="username"
          id="username"
          name="username"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default FormRegister;
