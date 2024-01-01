import { useState, useEffect } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

type MousePosition = {
    x: number,
    y: number
}

const CustomCursor: React.FC = (): React.JSX.Element => {

    const [mousePosition, setmousePosition] = useState<MousePosition>({
        x: 0,
        y: 0
    });

    const location = useLocation();

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setmousePosition({
                x: e.x - 20,
                y: e.y - 20,
            })
        }
        window.addEventListener("mousemove", mouseMove);
        return () => window.addEventListener("mousemove", mouseMove);
    }, []);

    useEffect(() => {
        const cursor: HTMLElement | null = document.getElementById("customCursor");

        gsap.to(cursor, {
            left: (mousePosition.x),
            top: (mousePosition.y),
            duration: 0.1
        });

    }, [mousePosition]);


    useEffect(() => {

        const cursor: HTMLElement | null = document.getElementById("customCursor");
        const cursorScale: NodeListOf<Element> = document.querySelectorAll(".cursor-scale-heading");

        const scaleUp = (): void => {
            if (cursor) {
                cursor.classList.add("grow");
            }
        }
        const scaleDown = (): void => {
            if (cursor) {
                cursor.classList.remove("grow");
            }
        }

        const handleCustomCursor = (): void => {
            cursorScale.forEach((item) => {
                item.addEventListener("mousemove", scaleUp);
                item.addEventListener("mouseleave", scaleDown);
            });
        }

        handleCustomCursor();

        return () => {
            cursorScale.forEach((item) => {
                item.addEventListener("mousemove", scaleUp);
                item.addEventListener("mouseleave", scaleDown);
            });
        }

    }, [location]);

    return (
        <div id="customCursor" className="pointer-events-none fixed left-0 top-0 w-12 h-12 border-[0.2rem] border-black rounded-[50%] bg-transparent"></div>
    );
}

export default CustomCursor;