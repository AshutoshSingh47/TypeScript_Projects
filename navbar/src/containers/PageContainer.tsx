import React, { ReactNode } from "react";

type PageContainerProps = {
    children: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }): React.JSX.Element => {

    return (
        <div className="hero absolute top-24 left-0 right-0 min-w-[100%] text-white px-8 py-4 min-h-[100dvh] flex flex-col justify-center max-md:justify-start max-md:px-4">
            {children}
        </div>
    );
}

export default PageContainer;