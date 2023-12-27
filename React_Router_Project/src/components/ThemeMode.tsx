import React, { useEffect, useState } from "react";

const ThemeMode: React.FC = (): React.JSX.Element => {

    const storedTheme: string | null = localStorage.getItem("theme");

    const themedValue: boolean = storedTheme ? JSON.parse(storedTheme) : false;

    const [isDark, setisDark] = useState<Boolean>(themedValue);

    const handleDarkMode = (): void => {
        setisDark(!isDark);
    }

    useEffect(() => {
        document.documentElement.className = isDark ? "dark" : "";
        localStorage.setItem("theme", JSON.stringify(isDark));
    }, [isDark]);

    return (
        <>
            <div className="dark-light-mode max-lg:hidden flex flex-row items-center relative justify-center cursor-pointer" onClick={() => handleDarkMode()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${isDark ? "hidden" : "block"} dark w-7 h-7 absolute `}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${isDark ? "block" : "hidden"} light w-8 h-8 absolute dark:text-yellow-400`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
            </div>
        </>
    );
}

export default ThemeMode;