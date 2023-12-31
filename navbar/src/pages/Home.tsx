import { Link } from "react-router-dom";
import Crypto from "../assets/images/Crypto.png";
import React from "react";

const Home: React.FC = (): React.JSX.Element => {

    return (
        <>
            <div className="custom-shape-divider-bottom-1703863472">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div id="hero-section" className="flex flex-row justify-evenly">
                <div className="hero-description text-black dark:text-white flex flex-col leading-2">
                    <h1 className="hero-heading font-bold text-[3.5rem] cursor-scale-heading">TRACK & <br />TRADE
                        {" "}<span className="text-[3.5rem] inline text-orange-400">Crypto</span>
                    </h1>
                    <p className="break-words cursor-scale-heading">World's best platform for Crypto market to trade and exchange seamlessly.</p>
                    <button className="explore-market w-52 h-16 text-black dark:text-white my-14 flex flex-row items-center justify-center gap-2 font-bold cursor-scale-heading rounded-full overflow-hidden bg-gradient-to-br from-gray-300 to-white shadow-2xl dark:bg-gradient-to-br dark:from-[#38335f] dark:to-[#423d71]">
                        <Link to="market">Explore Market</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                        </svg>
                    </button>
                </div>
                <img src={Crypto} draggable="false" className="h-[24rem] w-[30rem]" alt="crypto_illustration"></img>
            </div>
        </>
    );

}

export default Home;