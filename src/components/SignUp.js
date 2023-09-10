import React, { useState, useEffect } from "react";

const SignUp = ({ setUserData}) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

    const [users, setUsers] = useState([]);
    
  useEffect(() => {
      setUserData(users)
       console.log(users);
    }, [users, setUserData])
    

  const { username, email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (username.length !== 0 || email.length !== 0 || password.length !== 0 ) {
      console.log(data);
      setUsers([...users, data]);
        console.log(users);
      alert("User Registered Succussfully")
      setData({
        username: "",
        email: "",
        password: "",
      })
    } else {
      alert("Please Fillout all the Fields");
    }
  };

  return (
    <div className="register-form">
      <form onSubmit={submitHandler}>
        <h1>Sign Up</h1>
        <div>
          <label>Username :</label>
          <input
            type="text"
            name="username"
            onChange={changeHandler}
            value={username}
          />
        </div>
        <div>
          <label>Email : </label>
          <input
            type="email"
            name="email"
            onChange={changeHandler}
            value={email}
          />
        </div>
        <div>
          <label>password : </label>
          <input
            type="password"
            name="password"
            onChange={changeHandler}
            value={password}
          />
        </div>
       <button>Register</button>
      </form>
    </div>
  );
};

export default SignUp;
