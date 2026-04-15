import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Hello World</h1>
        <p>Welcome to the Next.js app! and we are just testing our how to handle dynamic routes</p>
        <p>Server side</p>
        <p>Client side</p>
      </main>
    </div>
  );
}
