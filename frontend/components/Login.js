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

  const handleRegister = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signUpUsername,
        firstname: signUpFirstname,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
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
      <div className={styles.h2}>Create your Hackatweet account</div>
      <input
        type="text"
        className={styles.input}
        placeholder="Firstname"
        onChange={(e) => setSignUpFirstname(e.target.value)}
        value={signUpFirstname}
      />
      <input
        type="text"
        className={styles.input}
        placeholder="Username"
        onChange={(e) => setSignUpUsername(e.target.value)}
        value={signUpUsername}
      />
      <input
        type="password"
        className={styles.input}
        placeholder="Password"
        onChange={(e) => setSignUpPassword(e.target.value)}
        value={signUpPassword}
      />
      <Link href="/accueil">
        <div className={styles.signUpModalBtn} onClick={() => handleRegister()}>
          Sign up
        </div>
      </Link>
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
      <div className={styles.h2}>Log In to your Hackatweet account</div>
      <input
        type="text"
        className={styles.input}
        placeholder="Username"
        onChange={(e) => setSignInUsername(e.target.value)}
        value={signInUsername}
      />
      <input
        type="password"
        className={styles.input}
        placeholder="Password"
        onChange={(e) => setSignInPassword(e.target.value)}
        value={signInPassword}
      />
      <Link href="/accueil">
        <div
          className={styles.signUpModalBtn}
          onClick={() => handleConnection()}
        >
          Sign In
        </div>
      </Link>
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
