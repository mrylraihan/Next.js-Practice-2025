"use client";
import Link from "next/link";
import Header from "./header";
// import { useRouter } from "next/navigation";

export default function Home() {
  // const router = useRouter();
  console.log("test");
  return (
    <main>
      {/* <img src="/icon.svg" alt="A server surrounded by magic sparkles." /> */}
      <Header/>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <Link href={'/about'}><p>About us!</p></Link>
      {/* <button onClick={()=>router.push('/about')}>Go to About</button> */}
    </main>
  );
}
