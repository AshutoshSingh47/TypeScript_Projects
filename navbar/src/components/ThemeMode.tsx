import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";

const ThemeMode: React.FC = (): React.JSX.Element => {

    const data = useContext(AppContext);

    if (!data) {
        return <div>Error: AppContext is not defined</div>
    }

    const { isdark, setisDark } = data.wrapperObject.themeMode;

    const handleTheme = (): void => {
        setisDark((isdark:boolean):boolean=>!isdark);
    }

    useEffect((): void => {
        document.documentElement.className = isdark ? "dark" : "";
        localStorage.setItem("theme", JSON.stringify(isdark));
    }, [isdark]);

    return (
        <>
            <div className="max-lg:hidden flex flex-row items-center cursor-pointer min-w-[2rem] justify-center" onClick={() => handleTheme()}>
                {
                    isdark ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-8 h-8 text-white absolute">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-7 h-7 absolute">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                }
            </div>
        </>
    );
}

export default ThemeMode;