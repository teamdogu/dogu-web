import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Joke from "./Joke.jsx";
import Playground from "./Playground.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/joke" element={<Joke />} />
      </Routes>
    </>
  );
}

export default App;
