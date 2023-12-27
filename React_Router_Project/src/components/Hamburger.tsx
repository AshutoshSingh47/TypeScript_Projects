import React, { useContext } from "react";
import "../assets/styles/Hamburger.scss";
import { AppContext } from "../context/AppContext";

const Hamburger: React.FC = (): React.JSX.Element => {

    const hamburger = useContext(AppContext);

    if (!hamburger) {
        return <div>Error: AppContext data is undefined</div>;
    }

    const { isOpen, setisOpen } = hamburger.ham;

    const handleHamburger = (): void => {
        setisOpen((isOpen) => !isOpen);
    }

    return (
        <>
            <div className={`hamburger ${isOpen ? "open" : ""} max-lg:flex max-lg:z-[2]  hidden flex-col gap-2 my-auto cursor-pointer`} onClick={() => handleHamburger()}>
                <div className="ham0 border border-solid w-6 h-0.4 border-black dark:border-white"></div>
                <div className="ham1 border border-solid w-6 h-0.4 border-black dark:border-white"></div>
            </div>
        </>
    );

}
export default Hamburger;