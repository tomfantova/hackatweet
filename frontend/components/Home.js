import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import { Modal } from "antd";
import Link from "next/link";
import Tweet from "./Tweet";

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.left}>
          <img src="bird.png" className={styles.logo} />
          <div className={styles.logoutSection}>
            <div className={styles.profile}>
              <img src="egg.jpg" className={styles.egg} />
              <div className={styles.pseudo}>
                <p>user.firstname ici</p>
                <p className={styles.username}>@user.username ici</p>
              </div>
            </div>
            <button className={styles.logout}>Logout</button>
          </div>
        </div>
        <div className={styles.tweets}>
          <h2>Home</h2>
          <Tweet />
        </div>
        <div className={styles.trends}>
          <h2>Trends</h2>
        </div>
      </main>
    </div>
  );
}

export default Home;
