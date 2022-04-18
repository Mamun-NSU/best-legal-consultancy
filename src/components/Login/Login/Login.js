import React, { useRef, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [login, setLogin] = useState(true);

  const [confirmError, setConfirmError] = useState("");

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });

  //for user create
  const [
    createUserWithEmailAndPassword,
    createUser,
    creteLoading,
    createError,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  //for login
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [loginUser, loginloading, loginerror] = useAuthState(auth);

  const handleFormInput = (event) => {
    userInfo[event.target.name] = event.target.value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!login) {
      if (userInfo.password !== userInfo.confirmPass) {
        setConfirmError("password can not match");
        return;
      }

      setConfirmError("");
      createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    } else {
      signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }

    console.log(userInfo);
  };

  let navigate = useNavigate();
  let location = useLocation();

  // let from = location.state?.from?.pathname || "/";

  if (loginUser) {
    // navigate(from, { replace: true });
    navigate("/home");
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  return (
    <div className="container">
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <h2>{login ? "Login" : "Register"}</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onBlur={(event) => handleFormInput(event)}
            type="text"
            className="form-control"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onBlur={(event) => handleFormInput(event)}
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        {!login && (
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              onBlur={(event) => handleFormInput(event)}
              type="password"
              name="confirmPass"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
        )}

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={() => setLogin(!login)}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          {login ? "Login" : "Register"}
        </button>
        <p className="text-danger">{confirmError}</p>
        {createError && <p className="text-danger">{createError.message}</p>}
        {createUser && <p className="text-success">User Create Successfully</p>}
        {user && <p className="text-success">User Login Successfully</p>}
      </form>
      <p className="text-center">
        Forget Password?{" "}
        <button
          className="btn btn-link text-primary pe-auto text-decoration-none"
          onClick={resetPassword}
        >
          Reset Password
        </button>{" "}
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;

// import React, { useRef } from "react";
// import { Button, Form } from "react-bootstrap";
// import {
//   useSendPasswordResetEmail,
//   useSignInWithEmailAndPassword,
// } from "react-firebase-hooks/auth";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import auth from "../../../firebase.init";
// import Loading from "../../Shared/Loading/Loading";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const emailRef = useRef("");
//   const passwordRef = useRef("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   // let from = location.state?.from?.pathname || "/";
//   // let from = location.state.from.pathname || "/";
//   let errorElement;
//   const [
//     signInWithEmailAndPassword,
//     user,
//     loading,
//     error,
//   ] = useSignInWithEmailAndPassword(auth);

//   const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

//   if (loading || sending) {
//     return <Loading></Loading>;
//   }

//   if (user) {
//     // navigate(from, { replace: true });
//     navigate("/home");
//   }

//   if (error) {
//     // errorElement = <p className="text-danger">Error: {error?.message}</p>;
//     errorElement = <p className="text-danger">Error: {error.message}</p>;
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const email = emailRef.current.value;
//     const password = passwordRef.current.value;

//     signInWithEmailAndPassword(email, password);
//   };

//   const navigateRegister = (event) => {
//     navigate("/register");
//   };

//   const resetPassword = async () => {
//     const email = emailRef.current.value;
//     if (email) {
//       await sendPasswordResetEmail(email);
//       toast("Sent email");
//     } else {
//       toast("please enter your email address");
//     }
//   };

//   return (
//     <div className="container w-50 mx-auto">
//       <h2 className="text-primary text-center mt-2">Please Login</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Control
//             ref={emailRef}
//             type="email"
//             placeholder="Enter email"
//             required
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Control
//             ref={passwordRef}
//             type="password"
//             placeholder="Password"
//             required
//           />
//         </Form.Group>
//         <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
//           Login
//         </Button>
//       </Form>
//       {errorElement}
//       <p>
//         New to Genius Car?{" "}
//         <Link
//           to="/register"
//           className="text-primary pe-auto text-decoration-none"
//           onClick={navigateRegister}
//         >
//           Please Register
//         </Link>{" "}
//       </p>
//       <p>
//         Forget Password?{" "}
//         <button
//           className="btn btn-link text-primary pe-auto text-decoration-none"
//           onClick={resetPassword}
//         >
//           Reset Password
//         </button>{" "}
//       </p>
//     </div>
//   );
// };

// export default Login;
