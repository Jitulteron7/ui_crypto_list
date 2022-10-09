import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Graph from "./pages/graph";
import Navbar from "./components/NavBar"
function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/graph" element={<Graph />} />
      </Routes>
    </>
  );
}

export default App;
