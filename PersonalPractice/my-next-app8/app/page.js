import styles from "./page.module.css";
import bladeRunner from "../public/bladerunner.jpg";
import Image from "next/image";
export default function Home() {
  console.log(process.env.SECRET_KEY)
  return (
    <>
    <div className={styles.page}>
      <main className={styles.main}>
          <h1 className={styles.title}>
           Home Page
          </h1>
          <Image src={bladeRunner} alt="Blade Runner" width={800} height={600} />
      </main>
    </div>
    </>
  );
}
