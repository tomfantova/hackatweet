import styles from "../styles/Tweet.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import { Modal } from "antd";
import Link from "next/link";

function Tweet() {
  const user = useSelector((state) => state.user.value);
  const [tweet, setTweet] = useState("");
  const count = tweet.length;

  const postTweet = () => {
    fetch("http://localhost:3000/users/tweet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: user.token,
        tweet: tweet,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTweet("");
      });
  };

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
            <span className={styles.count}>{count}/280</span>
            <button id="post" onClick={() => postTweet()}>
              Tweet
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Tweet;
