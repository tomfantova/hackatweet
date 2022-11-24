import styles from "../styles/Tweet.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import { Modal } from "antd";
import Link from "next/link";

function Tweet() {
  const [tweet, setTweet] = useState("");

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.container}>
          <input
            type="text"
            maxLength="280"
            placeholder="What's up ?"
            id="tweet"
            onChange={(e) => setTweet(e.target.value)}
            value={tweet}
          />
          <div className={styles.post}>
            <button id="post">Tweet</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Tweet;
