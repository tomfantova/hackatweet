import styles from "../styles/Tweet.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import { Modal } from "antd";
import Link from "next/link";

function Tweet() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.left}>Tweet ici</div>
      </main>
    </div>
  );
}

export default Tweet;
