import { useRouteError } from "react-router-dom";

const Error_Page:React.FC = ():React.JSX.Element=>{

    const error:unknown | undefined = useRouteError();
    console.log(error);

    return(
        <div className="error-page">Error</div>
    );
}

export default Error_Page;