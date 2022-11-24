import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import { Modal } from "antd";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Home() {
 
  function Home() {
    const handleClickSignin = () => {
      console.log("coucou signin");
    };
  
    const handleClickSignup = () => {
      console.log("coucou signup");
    };
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <FontAwesomeIcon icon={faTwitter} className={styles.twitterIcon} />
        </div>
        <div className={styles.right}>
          <div className={styles.formSection}>
            <FontAwesomeIcon
              icon={faTwitter}
              className={styles.twitterIconSmall}
            />
            <div>
              <h1 className={styles.title}>SEE WHAT'S HAPPENNING</h1>
              <h4 className={styles.titleSmall}>Join Hackatweet today</h4>
              <div
                onClick={() => handleClickSignup()}
                className={styles.btnSignup}
              >
                Sign Up
              </div>
              <h3 className={styles.titleAlready}>Already have an account ? </h3>
              <div
                onClick={() => handleClickSignin()}
                className={styles.btnSignin}
              >
                Sign In
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
 
}

export default Home;
