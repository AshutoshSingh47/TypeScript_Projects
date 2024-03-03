import { ReactNode, useContext } from "react";
import { AppContext } from "../contexts/AppContext";

type NavbarProps = {
    children:ReactNode
}

const Navbar:React.FC<NavbarProps> = ({children}):React.JSX.Element=>{

    const data = useContext(AppContext);

    if(!data){
        return <div>Error: AppContext is not defined</div>
    }

    const {isOpen} = data.wrapperObject.ham;

    return(
        <nav className={`${isOpen?"fixed":""} flex flex-row justify-between py-4 px-8 max-lg:px-6 max-sm:px-4 h-24 top-0 left-0 right-0 z-[200]`}>
            {children}
        </nav>
    );
}

export default Navbar;