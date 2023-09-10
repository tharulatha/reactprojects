
import { useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
// import TodoList from "./components/TodoList";

function App() {
  const [userData, setUserData] = useState([]);

  const [isSignUpVisible, setIsSignUpVisible] = useState(true);
  const [isSignInVisible, setIsSigninVisible] = useState(false)

  console.log(userData);


  function handleSignUp() {
    setIsSignUpVisible(true);
    setIsSigninVisible(false)
  }

  function handleSignIn() {
    setIsSignUpVisible(false);
    setIsSigninVisible(true)
  }


  return (
    <>
      {/* <TodoList /> */}
      <div className="btn">
        <button onClick={handleSignUp}>Sign Up</button>
        <button onClick={handleSignIn}>Sign In</button>
      </div>

     {isSignUpVisible &&  <SignUp  setUserData={setUserData} />}
      {isSignInVisible && <SignIn  userData={userData} />}
    </>
  )
}



export default App;
