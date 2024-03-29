import React, { useEffect, useState } from 'react';
import Navbar from './containers/Navbar';
import Logo from './components/Logo';
import NavMenu from './components/NavMenu';
import ThemeMode from './components/ThemeMode';
import Hamburger from './components/Hamburger';
import NavMenuResponsive from './components/NavMenuResponsive';
import CustomCursor from './components/CustomCursor.tsx';
import PageContainer from './containers/PageContainer';
import Footer from './components/Footer.tsx';
import "./App.scss";
import { Outlet } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext.tsx';

const App: React.FC = (): React.JSX.Element => {

  const [windowWidth, setwindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleWindowWidth = (): void => {
      setwindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowWidth);

    return () => window.addEventListener("resize", handleWindowWidth);
  }, []);


  return (
    <>
      <AppProvider>
        <Navbar>
          <Logo />
          {
            windowWidth >= 1024 ?
              <NavMenu />
              :
              <NavMenuResponsive />
          }
          <ThemeMode />
          <Hamburger />
        </Navbar>

        <PageContainer>
          <Outlet />
          <Footer/>
        </PageContainer>
        {/* <CustomCursor /> */}
      </AppProvider>
    </>
  );
}

export default App;
