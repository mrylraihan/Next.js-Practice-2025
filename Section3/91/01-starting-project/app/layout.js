import './globals.css'

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h3>NavBar</h3>
        {children}
        <h3>footer</h3>
      </body>
    </html>
  );
}
