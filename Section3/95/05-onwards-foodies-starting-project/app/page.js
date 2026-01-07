import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <nav>
      <Link href='/'><p>Home</p></Link>
      <Link href='/meals'><p>Meals</p></Link>
      <Link href='/meals/share'><p>Meal Share</p></Link>
      <Link href='/community'><p>community</p></Link>
      </nav>
    </main>
  );
}
