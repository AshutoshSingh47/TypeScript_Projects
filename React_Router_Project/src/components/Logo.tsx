import logo from "../assets/icons/logo.png";

const Logo: React.FC = (): React.JSX.Element => {
    return (
        <>
            <div className="logo cursor-pointer">
                <img src={logo} className="h-12" alt="logo"></img>
            </div>
        </>
    );
}

export default Logo;