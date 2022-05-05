import React, {useState} from 'react';

function FormSignUp() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleSex = (e) => {
    setSex(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("User Added")
    const userData = {
      username: username,
      age: age,
      sex: sex,
      email: email,
      password: password,
    };

   try{
    const add = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": '*',
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
        type="username"
        id="username"
        name="username"
        placeholder="Username"
        onChange={ handleUsername }
      />
      <input
        type="age"
        id="age"
        name="age"
        placeholder="Age"
        onChange={ handleAge }
      />
      <input
        type="sex"
        id="sex"
        name="sex"
        placeholder="sex"
        onChange={ handleSex }
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        onChange={ handleEmail }
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="password"
        onChange = { handlePassword }
      />
      <input 
        type="submit" 
        value="Register"
      />
    </form>
  </div>
  );
}

export default FormSignUp;
