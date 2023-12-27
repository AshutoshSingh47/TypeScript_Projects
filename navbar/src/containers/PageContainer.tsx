import React, { ReactNode } from "react";

type PageContainerProps = {
    children:ReactNode;
}


const PageContainer:React.FC<PageContainerProps> = ({children}):React.JSX.Element => {

    return (
        <div className="hero absolute top-24 left-0 right-0 w-[100%] dark:bg-[#282c34] p-4 text-white bg-white border dark:border-white h-[100dvh]">
        {children}
        </div>
    );
}

export default PageContainer;