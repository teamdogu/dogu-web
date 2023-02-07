import { Link } from "react-router-dom";

import "./App.css";
import dogularge from "./assets/dogularge.webp";
import twitter from "./assets/twitter.png";
import telegram from "./assets/telegram.png";
import phase1 from "./assets/phase1.webp";
import phase2 from "./assets/phase2.webp";
import phase3 from "./assets/phase3.webp";
import uni from "./assets/uni.png";
import etherscan from "./assets/etherscan.png";
import dextools from "./assets/dextools.png";
import mail from "./assets/mail.png";
import github from "./assets/github.png";

export default function Home() {
  return (
    <div className="App">
      <div className="bg-amber-200 p-10 md:p-36 h-4/5 md:h-screen md:grid grid-cols-2 gap-7 items-center">
        <div className="items-center">
          <h1 className="text-2xl md:text-5xl text-left text-gray-500 font-bold mb-5">
            HI, MY NAME IS <span className="text-amber-500">DOGU</span>, LET'S
            PLAY!
          </h1>
          <p className="text-left tracking-wider leading-10 md:text-xl text-slate-600">
            DOGU, Your AI pet dog that is always ready to play with you whenever
            you want. The most loved dog AI on the Ethereum Blockchain.
          </p>
          <div className="md:flex items-center">
            <div className="flex mt-3">
              <a
                className="mr-3"
                href="https://twitter.com/dogu_ai"
                target="_blank"
              >
                <img className="w-12" src={twitter} />
              </a>
              <a className="mr-3" href="https://t.me/doguai" target="_blank">
                <img className="w-12" src={telegram} />
              </a>
              <a className="mr-3" href="mailto:team@dogu.ai" target="_blank">
                <img className="w-12" src={mail} />
              </a>
              <a
                className="mr-5 md:mr-10"
                href="https://github.com/teamdogu"
                target="_blank"
              >
                <img className="w-12" src={github} />
              </a>
            </div>

            <Link
              to="/playground"
              target="_blank"
              className="text-white rounded bg-amber-500 py-3 px-5 font-bold items-center text-center tracking-wider hover:bg-amber-600 block mt-4"
            >
              LAUNCH APP
            </Link>
          </div>
        </div>
        <div className="items-center justify-center">
          <div className="justify-center">
            <img className="justify-center my-0 mx-auto" src={dogularge} />
          </div>
        </div>
      </div>

      {/* 2nd section */}
      <div className="bg-amber-100 p-10 md:p-36">
        <h1 className="text-2xl md:text-4xl text-gray-500 font-bold mb-10 md:mb-20">
          <span className="text-amber-500">DOGU</span>'S ROADMAP
        </h1>
        <div className="md:grid grid-cols-2 gap-7 items-center w-4/5 my-0 mx-auto mb-10">
          <div>
            <div className="hidden md:block justify-center">
              <img className="justify-center my-0 mx-auto" src={phase2} />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-left md:text-2xl md:mb-5 text-orange-700">
              PHASE 1
            </h2>
            <ul className="text-left leading-10 list-disc">
              <li>Community Setup</li>
              <li>Uniswap Fair Launch</li>
              <li>Apply For CMC & CG Listing</li>
              <li>Early DOGU Basic AI development</li>
            </ul>
          </div>
        </div>

        <div className="md:grid grid-cols-2 gap-7 items-center w-4/5 my-0 mx-auto mb-10">
          <div>
            <h2 className="font-bold text-left md:text-2xl md:mb-5 text-orange-700">
              PHASE 2
            </h2>
            <ul className="text-left leading-10 list-disc">
              <li>Partnerships</li>
              <li>CEX Listings</li>
              <li>Prepare for SHIBARIUM Chain</li>
              <li>Add more DOGU's Capability</li>
              <li>DOGU App development</li>
            </ul>
          </div>
          <div>
            <div className="hidden md:block justify-center">
              <img className="justify-center my-0 mx-auto" src={phase1} />
            </div>
          </div>
        </div>

        <div className="md:grid grid-cols-2 gap-7 items-center w-4/5 my-0 mx-auto">
          <div>
            <div className="hidden md:block justify-center">
              <img className="justify-center my-0 mx-auto" src={phase3} />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-left md:text-2xl md:mb-5 text-orange-700">
              PHASE 3
            </h2>
            <ul className="text-left leading-10 list-disc">
              <li>Organize DAO</li>
              <li>DOGU NFT Launch</li>
              <li>P2E Game Development</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tokenomics */}
      <div className="bg-grey-100 p-10 md:p-36">
        <h1 className="md:text-2xl text-slate-500 mb-10 md:mb-20">
          $doguAI TOKENOMICS
        </h1>
        <div className="w-3/5 my-0 mx-auto">
          <ul>
            <li>Max Supply: 444,444,444 </li>
            <li>Tax: 4% Buy / 4% Sell</li>
            <li>Max Wallet Hold: 2%</li>
          </ul>
        </div>
        <p className="mt-20 mb-3">$doguAI Contract Address:</p>
        <p className="text-xs md:text-lg">
          0x9a70E0B58e2cE91C3e897eE22e71c02A09c0285b
        </p>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 p-10 md:p-36">
        <h1 className="md:text-2xl text-slate-500 mb-10">
          GET INVOLVED WITH $doguAI
        </h1>
        <div className="md:grid grid-cols-4 w-3/5 my-0 mx-auto gap-20">
          <a
            className="flex items-center border-solid border-2 border-indigo-600 justify-center py-2 md:py-6 rounded-full hover:bg-indigo-100 mb-5"
            href="https://app.uniswap.org/#/swap?outputCurrency=0x9a70e0b58e2ce91c3e897ee22e71c02a09c0285b"
            target="_blank"
          >
            <img className="w-10 mr-5" src={uni} alt="" />
            <p>Swap</p>
          </a>
          <a
            className="flex items-center border-solid border-2 border-indigo-600 justify-center py-2 md:py-6 rounded-full  hover:bg-indigo-100 mb-5"
            href="https://etherscan.io/address/0x9a70E0B58e2cE91C3e897eE22e71c02A09c0285b"
            target="_blank"
          >
            <img className="w-8 mr-6" src={etherscan} alt="" />
            <p>Explorer</p>
          </a>
          <a
            className="flex items-center border-solid border-2 border-indigo-600 justify-center py-2 md:py-6 rounded-full  hover:bg-indigo-100 mb-5"
            href="https://www.dextools.io/app/en/ether/pair-explorer/0x7400718abee9f3e4d355a6169db285b13b011a8a"
          >
            <img className="w-7 mr-6" src={dextools} alt="" />
            <p>Chart</p>
          </a>
          <a
            className="flex items-center border-solid border-2 border-indigo-600 justify-center py-2 md:py-6 rounded-full  hover:bg-indigo-100 mb-5"
            href=""
          >
            {/* <img className="w-7 mr-6" src={dextools} alt="" /> */}
            <p>Dev Logs</p>
          </a>
        </div>
        <p className="mt-5">dogu.ai&copy;2023</p>
        {/* <button
          className="mt-3 border-solid border-2 border-slate-300 px-4 py-1"
          onClick={() =>
            navigator.clipboard.writeText(
              "0xdAC17F958D2ee523a2206206994597C13D831ec7"
            )
          }
        >
          copy
        </button> */}
      </div>
    </div>
  );
}
