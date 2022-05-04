import React from 'react';

function FormSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      email: email,
      password: password,
    };

   try{
    const add = await fetch("http://localhost:5000/", {
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
    <form>
      <input
        type="username"
        id="username"
        name="username"
        placeholder="Username"
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="password"
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
