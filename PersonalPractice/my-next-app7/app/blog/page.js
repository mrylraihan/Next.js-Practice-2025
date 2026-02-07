import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import BlogList from "../components/BlogList";

export default function Blog() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <h1 className={styles.title}>
           Blog Page
          </h1>
         <BlogList />
      </main>
    </div>
  );
}
