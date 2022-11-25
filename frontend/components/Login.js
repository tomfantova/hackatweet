import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { login, logout } from "../reducers/user";
import Link from "next/link";

export default function Login() {
  const dispatch = useDispatch();

  const [signUpModal, setSignUpModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpFirstname, setSignUpFirstname] = useState("");
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
<<<<<<< HEAD
  const [signInFirstname, setSignInFirstname] = useState("");

  const handleRegister = () => {
    console.log("click detected");

    console.log(signUpUsername);
    console.log(signUpFirstname);
    console.log(signUpPassword);
=======

  const handleRegister = () => {
>>>>>>> 392ac42022df5ecaa4fc059005983fff6547896f
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
<<<<<<< HEAD
        firstname: setSignUpFirstname,
        username: signUpUsername,
=======
        username: signUpUsername,
        firstname: signUpFirstname,
>>>>>>> 392ac42022df5ecaa4fc059005983fff6547896f
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
<<<<<<< HEAD
          dispatch(Login({ username: signUpUsername, token: data.token }));
          setSignUpUsername("");
          setSignUpPassword("");
          setSignUpFirstname("");
          setIsModalVisible(false);
=======
          dispatch(
            login({
              username: signUpUsername,
              token: data.token,
              firstname: data.firstname,
            })
          );
          setSignUpUsername("");
          setSignUpPassword("");
          setSignUpFirstname("");
>>>>>>> 392ac42022df5ecaa4fc059005983fff6547896f
        }
      });
  };

  const handleConnection = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
<<<<<<< HEAD
          dispatch(Login({ username: signInUsername, token: data.token }));
          setSignInUsername("");
          setSignInPassword("");
          setSignInFirstname("");
          setIsModalVisible(false);
=======
          console.log(data);
          dispatch(
            login({
              username: signInUsername,
              token: data.token,
              firstname: data.firstname,
            })
          );
          setSignInUsername("");
          setSignInPassword("");
>>>>>>> 392ac42022df5ecaa4fc059005983fff6547896f
        }
      });
  };

  const handleSignUp = () => {
    signUpModal && setSignUpModal(false);
    setSignUpModal(true);
  };

  const handleSignIn = () => {
    signInModal && setSignInModal(false);
    setSignInModal(true);
  };

  const signUpModalContent = (
    <div className={styles.modalContainer}>
      <FontAwesomeIcon
        icon={faXmark}
        className={styles.closeIcon}
        onClick={() => setSignUpModal(false)}
      />
      <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
<<<<<<< HEAD
      <h2>Create your Hackatweet account</h2>
      <input
        type="text"
=======
      <div className={styles.h2}>Create your Hackatweet account</div>
      <input
        type="text"
        className={styles.input}
>>>>>>> 392ac42022df5ecaa4fc059005983fff6547896f
        placeholder="Firstname"
        onChange={(e) => setSignUpFirstname(e.target.value)}
        value={signUpFirstname}
      />
      <input
        type="text"
<<<<<<< HEAD
=======
        className={styles.input}
>>>>>>> 392ac42022df5ecaa4fc059005983fff6547896f
        placeholder="Username"
        onChange={(e) => setSignUpUsername(e.target.value)}
        value={signUpUsername}
      />
      <input
        type="password"
<<<<<<< HEAD
=======
        className={styles.input}
>>>>>>> 392ac42022df5ecaa4fc059005983fff6547896f
        placeholder="Password"
        onChange={(e) => setSignUpPassword(e.target.value)}
        value={signUpPassword}
      />
<<<<<<< HEAD
      <div className={styles.signUpModalBtn} onClick={() => handleRegister()}>
        Sign up
      </div>
=======
      <Link href="/accueil">
        <div className={styles.signUpModalBtn} onClick={() => handleRegister()}>
          Sign up
        </div>
      </Link>
>>>>>>> 392ac42022df5ecaa4fc059005983fff6547896f
    </div>
  );

  const signInModalContent = (
    <div className={styles.modalContainer}>
      <FontAwesomeIcon
        icon={faXmark}
        className={styles.closeIcon}
        onClick={() => setSignInModal(false)}
      />
      <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
<<<<<<< HEAD
      <h2>Log In to your Hackatweet account</h2>
      <input
        type="text"
=======
      <div className={styles.h2}>Log In to your Hackatweet account</div>
      <input
        type="text"
        className={styles.input}
>>>>>>> 392ac42022df5ecaa4fc059005983fff6547896f
        placeholder="Username"
        onChange={(e) => setSignInUsername(e.target.value)}
        value={signInUsername}
      />
      <input
        type="password"
<<<<<<< HEAD
=======
        className={styles.input}
>>>>>>> 392ac42022df5ecaa4fc059005983fff6547896f
        placeholder="Password"
        onChange={(e) => setSignInPassword(e.target.value)}
        value={signInPassword}
      />
<<<<<<< HEAD
      <div className={styles.signUpModalBtn} onClick={() => handleConnection()}>
        Sign In
      </div>
=======
      <Link href="/accueil">
        <div
          className={styles.signUpModalBtn}
          onClick={() => handleConnection()}
        >
          Sign In
        </div>
      </Link>
>>>>>>> 392ac42022df5ecaa4fc059005983fff6547896f
    </div>
  );

  return (
    <div className={styles.globalContainer}>
      {signUpModal && signUpModalContent}
      {signInModal && signInModalContent}
      <div className={styles.imageContainer}></div>
      <div className={styles.textContainer}>
        <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
        <h2>
          See what's <br />
          happening
        </h2>
        <h4>Join Hackatweet today</h4>
        <div className={styles.signUpBtn} onClick={() => handleSignUp()}>
          Sign up
        </div>
        <p>Already have an account?</p>
        <div className={styles.signUpBtn} onClick={() => handleSignIn()}>
          Sign in
        </div>
      </div>
    </div>
  );
}
