import styles from "./ResultCard.module.css";

export default function ResultCard() {
  return (
    <div className={styles.card}>
      <h3>Your Result</h3>

      <div className={styles.circle}>
        <h1>76</h1>
        <p>of 100</p>
      </div>

      <h2>Great</h2>

      <p className={styles.text}>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}