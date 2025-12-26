"use client";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export default function Home() {
  // const router = useRouter();
  console.log("test");
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <Link href={'/about'}><p>About us!</p></Link>
      {/* <button onClick={()=>router.push('/about')}>Go to About</button> */}
    </main>
  );
}
