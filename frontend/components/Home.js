import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../reducers/user";
import Moment from "react-moment";
import { Modal } from "antd";
import Link from "next/link";
import Tweet from "./Tweet";
import LastTweets from "./LastTweets";

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const handleLogout = () => {
    dispatch(logout());
  };

  const [tweetsData, setTweetsData] = useState([]);

  console.log(tweetsData);

  useEffect(() => {
    fetch(`http://localhost:3000/users/tweets/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        setTweetsData(data.content.tweets);
      });
  }, []);

  const tweets = tweetsData.map((data, i) => {
    return <LastTweets key={i} {...data} />;
  });

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.left}>
          <img src="bird.png" className={styles.logo} />
          <div className={styles.logoutSection}>
            <div className={styles.profile}>
              <img src="egg.jpg" className={styles.egg} />
              <div className={styles.pseudo}>
                <p>@{user.username}</p>
                <p className={styles.username}>{user.firstname}</p>
              </div>
            </div>
            <Link href="/">
              <button className={styles.logout} onClick={() => handleLogout()}>
                Logout
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.tweets}>
          <h2>Home</h2>
          <Tweet />
          <div className={styles.LastTweets}>{tweets}</div>
        </div>
        <div className={styles.trends}>
          <h2>Trends</h2>
        </div>
      </main>
    </div>
  );
}

export default Home;
