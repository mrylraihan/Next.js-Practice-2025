"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      {/* <p><Link href='/community'>Community</Link></p>
      <p><Link href='/meals'>Meals</Link></p>
      <p><Link href='/meals/share'>Share Meals</Link></p> */}
      <button onClick={() => router.push('/meals')}>go to meals</button>
    </main>
  );
}
