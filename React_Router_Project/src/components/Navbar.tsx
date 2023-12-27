import { ReactNode } from "react";

type NavbarProps = {
    children: ReactNode
}

const Navbar: React.FC<NavbarProps> = ({ children }): React.JSX.Element => {

    return (
        <>
            <nav className="navbar fixed top-0 left-0 right-0 py-6 px-12 flex flex-row justify-between z-[200]">
                {children}
            </nav>
        </>
    );
}

export default Navbar;