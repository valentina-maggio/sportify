import React, {useState} from 'react';

function FormLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("User Logged in");
    const userData = {
      email,
      password,
    };

    try{
      const add = await fetch("http://localhost:3001/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
    console.log(add)
     }catch(err){
       console.error()
     }
    };

  return (
    <div>
    <form onSubmit={ handleSubmit }>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        onChange={ (e) => {setEmail(e.target.value);} }
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        onChange = { (e) => { setPassword(e.target.value);} }
      />
      <input 
        type="submit" 
        value="Login"
      />
    </form>
  </div>
  );
}

export default FormLogin;
