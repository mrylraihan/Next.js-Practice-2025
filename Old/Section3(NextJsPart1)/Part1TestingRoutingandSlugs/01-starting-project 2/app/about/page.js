import Link from "next/link";

export default function AboutPage() {
    return <main>
        <h1>About Page</h1>
        <p>This is the about page.</p>
        <p><Link href='/'>Home</Link></p>
    </main>
}