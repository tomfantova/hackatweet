import styles from "../styles/LastTweets.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import { Modal } from "antd";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

function LastTweets(props) {
  const [likeCount, setLikeCount] = useState(0);

  const deleteTweet = () => {
    fetch(`http://localhost:3000/users/${props.tweet}`, {
      method: "DELETE",
    }).then((response) => response.json());
  };

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };
  let heartStyle = { cursor: "pointer" };
  if (likeCount > 0) {
    heartStyle = { color: "#97001a", cursor: "pointer" };
  }

  return (
    <div className={styles.tweet}>
      <div className={styles.user}>
        <img src="egg.jpg" className={styles.egg} />
        <div className={styles.pseudo}>
          <span>{props.firstname}</span>
          <span>@{props.username}</span>
        </div>
      </div>
      <div className={styles.text}>{props.tweet}</div>
      <div className={styles.likes}>
        <FontAwesomeIcon
          onClick={() => handleLike()}
          icon={faHeart}
          style={heartStyle}
          className={styles.likeIcon}
        />
        <div>{likeCount}</div>
        <div className={styles.trash}>
          <FontAwesomeIcon
            icon={faTrash}
            className={styles.trashIcon}
            onClick={() => deleteTweet()}
          />
        </div>
      </div>
    </div>
  );
}

export default LastTweets;
