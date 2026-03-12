import styles from "../page.module.css";

export default async function Contact() {
  const res = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "John Doe",
        email: "john.doe@example.com",
      });
    }, 2000);
  });

  const data = await res; 


  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <h1 className={styles.title}>
           Contact Page
          </h1>
          <div>
            <h2>{data.name}</h2>
            <h2>{data.email}</h2>
          </div>
      </main>
    </div>
  );
}
