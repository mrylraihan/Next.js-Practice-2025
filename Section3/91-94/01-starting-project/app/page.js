"use client";
import Link from "next/link";
import Header from "@/components/header";

// import { useRouter } from "next/navigation";

export default function Home(props) {
  console.log("props App", props)
  // const router = useRouter();
  console.log("test");
  return (
    <main>
      {/* <img src="/icon.svg" alt="A server surrounded by magic sparkles." /> */}
      <Header/>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <Link href={'/about'}><p>About us!</p></Link>
      <Link href={'/blogU'}><p>BlogU</p></Link>
      <Link href={'/blog'}><p>Blog</p></Link>
      <Link href={'/post'}><p>post with useParams</p></Link>
      {/* <button onClick={()=>router.push('/about')}>Go to About</button> */}
    </main>
  );
}
