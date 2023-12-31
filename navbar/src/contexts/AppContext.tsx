import { ReactNode, createContext, useState } from "react";
import { useLocation } from "react-router-dom";

type NavLinks = {
    id: number,
    name: string,
    link: string
}

type AppProviderProps = {
    children: ReactNode
}

type AppContext = {
    wrapperObject: wrapperObject
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

type ham = {
    isOpen: boolean,
    setisOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type themeMode = {
    isdark: boolean,
    setisDark: React.Dispatch<React.SetStateAction<boolean>>
}

type navId = {
    index: number,
    setIndex: React.Dispatch<React.SetStateAction<number>>
}

type wrapperObject = {
    ham: ham,
    themeMode: themeMode,
    navId: navId
    navitems: NavLinks[]
}

export const AppContext = createContext<AppContext | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = ({ children }): React.JSX.Element => {

    //Variable navitems storing array of objects.
    const navitems: NavLinks[] = [{ id: 1, name: "Home", link: "" }, { id: 2, name: "Market", link: "market" }, { id: 3, name: "About", link: "about" }, { id: 4, name: "Join", link: "join" }];

    /* Sets the default theme mode
    
    @param 
    isOpen: boolean -> state variable to store hamburger menu open or close.
    setisOpen: function -> state updater function.
    
    */
    const [isOpen, setisOpen] = useState<boolean>(false);

    // Loads the default theme mode saved in local Storage
    const json: string | null = localStorage.getItem("theme");

    //Converts the data stored in string to an object.
    const theme = json ? JSON.parse(json) : false;

    /* Sets the default theme mode

    @param 
    isdark: boolean -> state variable to store theme mode.
     setisDark: function -> state updater function.

    */
    const [isdark, setisDark] = useState<boolean>(theme);

    //Fetch current clicked link in form of object.
    const location: Location = useLocation();

    //Gets path name of the link in string
    const pathName: string = location.pathname.slice(1);

    //Gets id of the link by filtering it with navitems array of objects.
    const linkId: number = navitems.filter((item) => item.link == pathName)[0].id - 1;

    /* Sets the default theme mode

    @param 
     index: number -> state variable to store index number of the link.
     setIndex: function -> state updater function.

    */
    const [index, setIndex] = useState<number>(linkId);

    //Storing the hook function and state variable in the ham variable.
    const ham: ham = { isOpen, setisOpen };

    //Storing the hook function and state variable in the themeMode variable.
    const themeMode: themeMode = { isdark, setisDark };

    //Storing the hook function and state variable in the navId variable.
    const navId: navId = { index, setIndex };

    //Storing the above three variables and one array into wrapperObject variable.
    const wrapperObject: wrapperObject = { ham, themeMode, navId, navitems };

    return (
        <AppContext.Provider value={{ wrapperObject }}>
            {children}
        </AppContext.Provider>
    );
}