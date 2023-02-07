import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import dogusit from "./assets/dogu-sit.webp";
import dogudad from "./assets/dogudad.png";

import loadingimg from "./assets/loading.gif";

function Joke() {
  const [jokes, setJokes] = useState({
    setup: "GM, Dogu don't know where you live, but GM!",
    punchline: "",
  });
  const [isDogu, setIsDogu] = useState(true);
  const [dadJoke, setDadJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [line, setLine] = useState("");
  const baseURL = "https://official-joke-api.appspot.com/jokes/random";

  const getJokes = () => {
    setLoading(true);
    if (isDogu) {
      axios.get(baseURL).then((res) => {
        const setup = res.data.setup;
        const punchline = res.data.punchline;
        setLine("");
        setJokes({
          setup,
          punchline,
        });
        setLoading(false);
      });
    } else {
      const axiosConfig = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      const baseURL = "https://icanhazdadjoke.com/";
      axios.get(baseURL, axiosConfig).then((res) => {
        const setup = res.data.joke;

        setLine("");
        setJokes({
          setup,
        });
        setLoading(false);
      });
    }
  };

  const addPunchline = () => {
    setLine(jokes.punchline);
  };

  return (
    <div className="bg-amber-200 w-screen h-screen p-10 md:p-20">
      <h1 className="text-2xl text-center md:text-4xl font-bold text-slate-500">
        {" "}
        <span className="text-amber-500">DOGU</span> TELL JOKES
      </h1>
      <Link className="text-center block underline" to="/playground">
        {"< Back to playground"}
      </Link>
      <div className="md:grid grid-cols-2 gap-7 items-center md:w-3/5 h-4/5 my-0 mx-auto">
        <div className=" md:w-4/5 my-0 mx-auto">
          <img
            className="w-3/5 my-0 mx-auto"
            src={isDogu ? dogusit : dogudad}
            alt=""
          />
          <div className="flex justify-between">
            <button
              onClick={() => {
                setIsDogu(true);
                setJokes({
                  setup: "GM, Dogu don't know where you live, but GM!",
                  punchline: "",
                });
              }}
              className={`bg-amber-500 py-2 px-5 ${
                isDogu ? "bg-amber-500" : "bg-white"
              }`}
            >
              Dogu
            </button>
            <button
              onClick={() => {
                setIsDogu(false);
                setJokes({
                  setup: "Hi Kid, Good Morning, always morning in here",
                  punchline: "",
                });
                setLine("");
              }}
              className={`bg-amber-500 py-2 px-5 ${
                isDogu ? "bg-white" : "bg-amber-500"
              }`}
            >
              Mr. Clay
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-end mb-2">
            <p className="text-xl mt-2">{isDogu ? "Dogu:" : "Mr. Clay:"}</p>{" "}
            {loading && <img className="w-1/6" src={loadingimg} />}
          </div>

          <div className="bg-white p-5 md:p-10">
            <p className="md:text-2xl text-gray-500">{jokes.setup}</p>
            <p className="md:text-2xl mt-5 text-slate-700">{line}</p>
          </div>

          <button
            onClick={getJokes}
            className={`mr-3 mt-10 border-solid border-2 border-indigo-400 justify-center py-2 px-6 rounded-full hover:bg-indigo-100`}
          >
            {isDogu ? "Dogu, Tell Me A Joke" : "Mr. Clay, any joke?"}
          </button>
          {isDogu && (
            <button
              onClick={addPunchline}
              className="mt-5 border-solid border-2 border-indigo-400 justify-center py-2 px-6 rounded-full hover:bg-indigo-100"
            >
              Punchline
            </button>
          )}

          {/* <button
            onClick={getDadJoke}
            className="mt-10 border-solid border-2 border-indigo-400 justify-center py-2 px-6 rounded-full hover:bg-indigo-100"
          >
            dad joke
          </button> */}
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Joke;
