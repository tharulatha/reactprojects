import { useState } from "react";

const SignIn = ({ userData }) => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const { username, password } = loginData;

  function handleChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const logedInfo = userData.filter(
      (value) => value.username === username && value.password === password
    );

    if (logedInfo.length > 0) {
      console.log(logedInfo);
      setIsAuthenticate(true);
      alert("Logging in Sucussfully");
    } else {
      setIsAuthenticate(false);
      alert("Invalid Username or Password");
    }
  }

  return (
    <div className="sign-in">
      {isAuthenticate ? (
        <h1>Welcome {loginData.username}</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <button>Sign In</button>
        </form>
      )}
    </div>
  );
};

export default SignIn;
