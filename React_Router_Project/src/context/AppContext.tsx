import { ReactNode, createContext, useState } from "react";

type AppProvideProps = {
    children: ReactNode
}

type ham = {
    isOpen: boolean;
    setisOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type navlink = {
    clickTabIndex: number;
    setclickedTabIndex: React.Dispatch<React.SetStateAction<number>>;
}

type AppContext = {
    ham: ham,
    navlink: navlink
}

export const AppContext = createContext<AppContext | undefined>(undefined);

export const AppProvider: React.FC<AppProvideProps> = ({ children }): React.JSX.Element => {

    const [isOpen, setisOpen] = useState<boolean>(false);

    const [clickTabIndex, setclickedTabIndex] = useState<number>(0);

    const ham: ham = { isOpen, setisOpen };

    const navlink: navlink = { clickTabIndex, setclickedTabIndex };

    const wrapperObject: AppContext = { ham, navlink }

    return (
        <AppContext.Provider value={wrapperObject}>
            {children}
        </AppContext.Provider>
    );
}