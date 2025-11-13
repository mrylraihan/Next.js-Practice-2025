"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AboutPage() {
    const router = useRouter();
    return <main>
        <h1>About Page</h1>
        <p>This is the about page.</p>
        <p><Link href='/'>Home</Link></p>
        <p onClick={()=>router.push('/')}>Home</p>
    </main>
}