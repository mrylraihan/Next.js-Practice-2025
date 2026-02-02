import HeaderBackground from './components/HeaderBackground';
import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout(props) {
  const {children} = props
  console.log(props)
  return (
    <html lang="en">
      <body>
        <HeaderBackground/>
        <Navbar/>
        <h1>Meals website</h1>
        {children}
      </body>
    </html>
  );
}
