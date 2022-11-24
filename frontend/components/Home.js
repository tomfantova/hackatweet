import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.left}>
          <img src="bird.png" className={styles.logo} />
        </div>
        <div className={styles.tweets}>
          <h2>Home</h2>
        </div>
        <div className={styles.trends}>
          <h2>Trends</h2>
        </div>
      </main>
    </div>
  );
}

export default Home;
