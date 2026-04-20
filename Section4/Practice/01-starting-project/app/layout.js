import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
}

export default function RootLayout({ children }) {
 return (
		<html lang='en'>
			<body>
				<>
					<Navbar />
					{children}
				</>
			</body>
		</html>
 )
}
