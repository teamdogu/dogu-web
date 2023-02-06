import React from "react";
import { Link } from "react-router-dom";
import doguhand from "./assets/doguhand.webp";

function Playground() {
  return (
    <div className="bg-amber-200 w-screen h-screen p-10 md:p-20">
      <h1 className="text-2xl text-center md:text-4xl font-bold text-slate-500 mb-10">
        {" "}
        <span className="text-amber-500">DOGU'S</span> PLAYGROUND
      </h1>

      <div className="md:grid grid-cols-2 gap-7 items-center md:w-3/5 h-4/5 my-0 mx-auto w-full">
        <Link
          to="/joke"
          className="border-solid border-2 border-indigo-400 rounded-full text-center w-full block py-3 md:py-7 text-slate-600 mb-7 hover:bg-indigo-100 md:font-bold"
        >
          DOGU'S JOKES
        </Link>
        <Link
          to="/playground"
          className="border-solid border-2 border-indigo-400 rounded-full text-center w-full block py-3 md:py-7 text-slate-600 mb-7 hover:bg-indigo-100 md:font-bold"
        >
          TEXT TO MOTION AI (Soon)
        </Link>
        <Link
          to="/playground"
          className="border-solid border-2 border-indigo-400 rounded-full text-center w-full block py-3 md:py-7 text-slate-600 mb-7 hover:bg-indigo-100 md:font-bold"
        >
          3D MOTION DIFFUSION (Soon)
        </Link>
        <Link
          to="/playground"
          className="border-solid border-2 border-indigo-400 rounded-full text-center w-full block py-3 md:py-7 text-slate-600 mb-7 hover:bg-indigo-100 md:font-bold"
        >
          PET TO EARN (Soon)
        </Link>
        <img
          className="fixed -bottom-10 md:bottom-0 -right-24 md:right-0 w-2/3 md:w-1/5"
          src={doguhand}
          alt=""
        />

        <div></div>
      </div>

      <div></div>
    </div>
  );
}

export default Playground;
