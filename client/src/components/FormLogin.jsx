import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import FlashMessage from 'react-flash-message'

// import { useEffect } from "react/cjs/react.production.min";

function FormLogin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      console.log(user);
      const response = await axios.post(
        "http://localhost:3001/users/login",
        user
      );

      if (response.status === 200) {
        sessionStorage.setItem("item_key", user.email);
        navigate("/dashboard");
      } else {// eslint-disable-line
        console.log("invalid email or password and have recieved a status code other than")// eslint-disable-line
        alert("Invalid email or password.");// eslint-disable-line
      }
    } catch (error) {
      console.log("User could not be logged in", error.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <input type="submit" value="Login" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default FormLogin;
