import getDetailsData from "@/lib/GetDetailsData";
import styles from "../page.module.css";
import AboutDetails from "../components/AboutDetails";
import { Suspense } from "react";

async function AboutDetailsDisplay({details}) {
  // const details = await getDetailsData(); 
  return <AboutDetails {...details} />;
}

export default async function About() {
  const details = await getDetailsData(); 
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <h1 className={styles.title}>
           About Page
          </h1>
          <Suspense fallback={<div>Loading details...</div>}>

          <AboutDetailsDisplay details={details}/>
          </Suspense>
      </main>
    </div>
  );
}

// async function AboutDetailsDisplay() {
//   const details = await getDetailsData(); 
//   return <AboutDetails {...details} />;
// }

// export default function About() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//           <h1 className={styles.title}>
//            About Page
//           </h1>
//           <Suspense fallback={<div>Loading details...</div>}>

//           <AboutDetailsDisplay />
//           </Suspense>
//       </main>
//     </div>
//   );
// }
