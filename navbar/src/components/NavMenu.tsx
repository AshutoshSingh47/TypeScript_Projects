import React, { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import { Link, useLocation } from "react-router-dom";

const NavMenu: React.FC = (): React.JSX.Element => {

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

    const { index, setIndex } = data.wrapperObject.navId;

    const navitems: NavLinks[] = data.wrapperObject.navitems;

    const updateStyles = (id: number): void => {
        const liElements: NodeListOf<HTMLLIElement> = document.querySelectorAll(".link-item");
        liElements.forEach((item: HTMLLIElement): void => item.classList.remove("active"));
        liElements[id].classList.add("active");
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
        }

        const handleMouseStates = (): void => {
            liElements.forEach((item: HTMLLIElement): void => {
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
        <>
            <ul className="max-lg:hidden nav-menu flex list-none flex-row gap-6 items-center text-lg cursor-pointer">
                {
                    navitems.map((value: NavLinks) => (
                        <li key={value.id} data-id={value.id} className="link-item text-black dark:text-white hover:text-white dark:hover:text-black">
                            <Link to={value.link}>{value.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}
export default NavMenu;