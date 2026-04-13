import styles from "./SummaryCard.module.css";
import data from "../data/data.json";

export default function SummaryCard() {
  return (
    <div className={styles.card}>
      <h3>Summary</h3>

      {data.map((item, i) => (
        <div key={i} className={`${styles.item} ${styles[item.category.toLowerCase()]}`}>
          <span>{item.category}</span>

          <span className={styles.score}>
            {item.score} <span>/ 100</span>
          </span>
        </div>
      ))}

      <button className={styles.btn}>Continue</button>
    </div>
  );
}