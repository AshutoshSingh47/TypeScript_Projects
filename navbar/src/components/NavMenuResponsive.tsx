import React, { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import { Link, useLocation } from "react-router-dom";

const NavMenuResponsive: React.FC = (): React.JSX.Element => {

    type NavLinks = {
        id: number,
        name: string,
        link: string
    }

    type Location<State = any> = {
        state: State;
        key: string;
    } & Path

    type Path = {
        pathname: string,
        search: string,
        hash: string
    }

    const data = useContext(AppContext);

    const location: Location = useLocation();

    if (!data) {
        return <div>Error: AppContext is not defined</div>
    }

    const { isOpen, setisOpen } = data.wrapperObject.ham;

    const { isdark, setisDark } = data.wrapperObject.themeMode;

    const { index, setIndex } = data.wrapperObject.navId;

    const navitems: NavLinks[] = data.wrapperObject.navitems;

    const updateStyles = (id: number): void => {
        const liElements: NodeListOf<HTMLLIElement> = document.querySelectorAll(".link-item");
        liElements.forEach((item) => item.classList.remove("active"));
        liElements[id].classList.add("active");
    }

    const handleTheme = (): void => {
        setisDark((isdark: boolean): boolean => !isdark);
    }

    useEffect((): void => {

        const pathName: string = location.pathname.slice(1);

        const linkId: number = navitems.filter((item) => item.link == pathName)[0].id - 1;

        setIndex((index) => index = linkId);

    }, [location.pathname]);

    useEffect(() => {
        const liElements: NodeListOf<HTMLLIElement> = document.querySelectorAll(".link-item");

        const handleMouseClick = (item: Element): void => {
            const id: number = Number(item.getAttribute("data-id")) - 1;
            liElements.forEach((item) => item.classList.remove("active"));
            setIndex(id);
            updateStyles(id);
            setisOpen((isOpen) => !isOpen);
        }

        const handleMouseStates = (): void => {
            liElements.forEach((item: HTMLLIElement) => {
                item.addEventListener("click", (): void => handleMouseClick(item));
            });
        }

        const setDefaultStyle = (): void => {
            liElements.forEach((item) => item.classList.remove("active"));
            liElements[index].classList.add("active");
            handleMouseStates();
        }

        setDefaultStyle();

        return () => {
            liElements.forEach((item: HTMLLIElement) => {
                item.addEventListener("click", (): void => handleMouseClick(item));
            });
        };

    }, [index]);

    return (
        <ul className={`nav-menu ${isOpen ? "responsive" : ""} h-[100dvh] w-[100%] fixed top-0 -right-[100%] list-none flex flex-col justify-center gap-8 items-center text-lg cursor-pointer dark:bg-[#282c34] bg-slate-200 z-[2] transition-all`}>
            {
                navitems.map((value: NavLinks) => (
                    <Link key={value.id} data-id={value.id} className="link-item text-black dark:text-white hover:text-white dark:hover:text-black" to={value.link}>{value.name}</Link>
                ))
            }
            <div className={`flex flex-row items-center cursor-pointer justify-center`} onClick={() => handleTheme()}>
                {
                    isdark ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-8 h-8 text-white absolute">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-7 h-7 absolute">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                }
            </div>
        </ul>
    );
}

export default NavMenuResponsive;