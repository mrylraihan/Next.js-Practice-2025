import { Suspense } from "react";
import styles from "../page.module.css";

export async function ServicesData() {
  const res = new Promise((res, rej)=>{
    setTimeout(()=>{
      res({
        name: "John Doe",
      })
    }, 2000)
  })
  const data = await res;
  console.log(data)
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <h1 className={styles.title}>
           Services Page
          </h1>
      </main>
    </div>
  );
}

export default function Services() {
  
  return (
    <div className={styles.page}>
      <Suspense fallback={<h2>Loading Services...</h2>}>
      <ServicesData />
      </Suspense>
    </div>
  );
}
