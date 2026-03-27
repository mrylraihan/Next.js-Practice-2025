import MainHeaderBackground from './components/main-header-nav/main-header-background';
import Navbar from './components/main-header-nav/Navbar';
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
       {/* <MainHeaderBackground /> moved to Navbar.jsx*/}
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
