import React, { useEffect, useMemo, useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../assets/styles/NavbarLinks.scss";

type NavBarLink = {
    id: number,
    item: string,
}

type LiElementDimension = {
    left: number,
    width: number,
    height: number
}

const NavBarLinks: React.FC = (): React.JSX.Element => {

    const links: NavBarLink[] = [{ id: 1, item: "Home" }, { id: 2, item: "About" }, { id: 3, item: "Contact" }];

    const [lidimension, setliDimension] = useState<LiElementDimension>({ left: 0, width: 0, height: 0 });

    const data = useContext(AppContext);

    if (!data) {
        return <div>Error: AppContext data is undefined</div>;
    }

    const { isOpen, setisOpen } = data.ham;

    const { clickTabIndex, setclickedTabIndex } = data.navlink;

    const updateStyles = (): void => {
        const hoverTab: HTMLDivElement | null = document.querySelector(".hoverTab");
        const liElements: NodeListOf<HTMLLIElement> = document.querySelectorAll(".link-item");

        if (hoverTab) {
            const rect: DOMRect = liElements[clickTabIndex].getBoundingClientRect();
            hoverTab.style.left = `${rect.left - 16}px`;
            hoverTab.style.width = `${rect.width + 30}px`;
            hoverTab.style.height = `${rect.height + 5}px`;
        }
    }

    useMemo((): void => updateStyles(), [lidimension]);

    useEffect(() => {
        const liElements: NodeListOf<HTMLLIElement> = document.querySelectorAll(".link-item");

        const handleMouseClick = (item: HTMLLIElement, key: number): void => {
            if (!isOpen && window.innerWidth <= 1024) {
                setclickedTabIndex(key);
                setisOpen((isOpen) => !isOpen);
            } else {
                const rect: DOMRect = item.getBoundingClientRect();
                setclickedTabIndex(key);
                setliDimension({ left: rect.left, width: rect.width, height: rect.height });
            }
        }

        const handleMouseEnter = (item: HTMLLIElement): void => {
            const hoverTab: HTMLDivElement | null = document.querySelector(".hoverTab");
            if (hoverTab) {
                const rect: DOMRect = item.getBoundingClientRect();
                hoverTab.style.left = `${rect.left - 16}px`;
                hoverTab.style.width = `${rect.width + 30}px`;
                hoverTab.style.height = `${rect.height + 5}px`;
            }
        }

        const handleMouseLeave = (): void => {
            const hoverTab: HTMLDivElement | null = document.querySelector(".hoverTab");
            if (hoverTab) {
                const rect: DOMRect = liElements[clickTabIndex].getBoundingClientRect();
                setliDimension({ left: rect.left, width: rect.width, height: rect.height });
            }
        }

        const updateLiDimension = (): void => {
            liElements.forEach((item: HTMLLIElement, key: number) => {
                if (!isOpen && window.innerWidth <= 1024) {
                    item.addEventListener("click", () => handleMouseClick(item, key));
                } else {
                    item.addEventListener("mouseover", () => handleMouseEnter(item));
                    item.addEventListener("mouseleave", () => handleMouseLeave());
                    item.addEventListener("click", () => handleMouseClick(item, key));
                }
            })
        }

        const setDefaultLiElementDimension = (): void => {
            const defaultRect: DOMRect = liElements[0].getBoundingClientRect();
            setliDimension({ left: defaultRect.left, width: defaultRect.width, height: defaultRect.height });
            updateLiDimension();
        }

        const updateWindowSize = (): void => {
            setDefaultLiElementDimension();
        }

        if (window.innerWidth > 1024) {
            window.addEventListener("load", setDefaultLiElementDimension);
            window.addEventListener("resize", updateWindowSize);
        } else {
            updateLiDimension();
        }

        return () => {
            window.removeEventListener("resize", updateWindowSize);
        };

    }, []);

    return (
        <>
            <ul className={`nav-menu ${isOpen ? "responsive" : ""} flex flex-row gap-8 items-center cursor-pointer`}>
                {links.map((link: NavBarLink) => (
                    <li key={link.id} className="link-item dark:text-white text-lg transition-color duration-[0.3s] ease-in-out">{link.item}</li>
                ))}
                {window.innerWidth > 1024 ?
                    <div className="max-lg:hidden hoverTab z-[-1] opacity-100 absolute block border-0 bg-gray-300 dark:bg-[#7843e9] rounded transition-all duration-[0.3s] ease-in-out"></div> : ""
                }
            </ul>
        </>
    );
}

export default NavBarLinks;