import logo from "./logo.svg";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Explore from "./Components/Explore/Explore";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import All from "./Components/All";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<All />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
