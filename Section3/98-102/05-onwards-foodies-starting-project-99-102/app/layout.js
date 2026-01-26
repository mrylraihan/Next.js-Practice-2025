import MainHeaderBackground from './components/main-header-background';
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
       <MainHeaderBackground />
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
