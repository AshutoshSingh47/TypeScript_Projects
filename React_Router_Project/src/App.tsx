import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import NavBarLinks from "./components/NavbarLinks";
import ThemeMode from "./components/ThemeMode";
import Hamburger from "./components/Hamburger";
import "./App.scss";

const App: React.FC = (): React.JSX.Element => {
    return (
        <>
            <Navbar>
                <Logo />
                <NavBarLinks />
                <ThemeMode />
                <Hamburger />
            </Navbar>
        </>
    );
}

export default App;