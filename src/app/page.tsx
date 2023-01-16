import styles from "./page.module.css";
import DefaultTags from "./DefaultTags";

export default function Home() {
  return (
    <>
      <DefaultTags />
      <main className={styles.main}>1234</main>
    </>
  );
}
