import { Link } from "react-router-dom";
import Crypto from "../assets/images/Crypto.png";
import React from "react";

const Home: React.FC = (): React.JSX.Element => {
    return (
        <>
            <div id="hero-section" className="flex flex-row justify-center items-center gap-20 max-[1035px]:gap-8 max-md:flex-col-reverse max-md:mb-20">
                <div className="hero-description text-black dark:text-white flex flex-col min-[8rem]">
                    <h1 className="hero-heading font-bold text-[3.5rem] max-lg:text-[3rem] cursor-scale-heading max-md:text-center max-sm:text-[2.5rem]">TRACK & <br />TRADE
                        {" "}<span className="text-[3.5rem] max-lg:text-[3rem] max-sm:text-[2.5rem] inline text-orange-400">Crypto</span>
                    </h1>
                    <p className="break-words cursor-scale-heading max-lg:text-[0.9rem] max-md:text-center">World's best platform for Crypto market to trade and exchange seamlessly.</p>
                    <Link to="market" className="explore-market w-52 h-16 max-md:mx-auto max-lg:w-48 max-lg:h-14 max-lg:text-[0.9rem] text-black dark:text-white my-14 flex flex-row items-center justify-center gap-2 font-bold cursor-scale-heading rounded-full overflow-hidden bg-gradient-to-br from-gray-300 to-white shadow-2xl dark:bg-gradient-to-br dark:from-[#38335f] dark:to-[#423d71]">
                        Explore Market
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                        </svg>
                    </Link>
                </div>
                <img src={Crypto} draggable="false" className="h-[24rem] w-[30rem] max-sm:h-[15rem] max-sm:w-[15rem] max-lg:h-[20rem] max-lg:w-[24rem]" alt="crypto_illustration"></img>
            </div>
        </>
    );

}

export default Home;