import ResultCard from "./components/ResultCard";
import SummaryCard from "./components/SummaryCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <ResultCard />
      <SummaryCard />
    </main>
  );
}