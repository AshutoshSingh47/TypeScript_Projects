import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const Hamburger: React.FC = (): React.JSX.Element => {

    const data = useContext(AppContext);

    if (!data) {
        return <div>Error: AppContext is not defined</div>
    }

    const { isOpen, setisOpen } = data.wrapperObject.ham;

    const handleMenu = (): void => {
        setisOpen(!isOpen);
    }

    return (
        <>
            <div className={`hamburger ${isOpen ? "open" : ""} hidden max-lg:flex flex-col w-8 h-8 z-[2] items-center cursor-pointer justify-center border-2 border-black dark:border-white rounded-[50%] self-center`} onClick={() => handleMenu()}>
                <div className="ham0 w-4 h-[0.5] border border-black dark:border-white"></div>
                <div className="ham1  w-4 h-[0.5] border border-black dark:border-white"></div>
            </div>
        </>
    );
}

export default Hamburger;