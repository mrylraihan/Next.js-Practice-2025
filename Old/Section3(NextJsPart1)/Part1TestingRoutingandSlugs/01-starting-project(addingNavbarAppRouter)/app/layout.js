import Navbar from './components/Navbar';
import './globals.css'
import { Link } from 'next/link';

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
      <main>
        {children}
      </main>
      </body>
    </html>
  );
}
