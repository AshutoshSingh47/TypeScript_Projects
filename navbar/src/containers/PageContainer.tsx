import React, { ReactNode } from "react";

type PageContainerProps = {
    children: ReactNode;
}


const PageContainer: React.FC<PageContainerProps> = ({ children }): React.JSX.Element => {

    return (
        <div className="hero absolute top-24 left-0 right-0 w-[100%]  text-white px-10 py-4 h-[87dvh] flex flex-col justify-center">
            {children}
        </div>
    );
}

export default PageContainer;