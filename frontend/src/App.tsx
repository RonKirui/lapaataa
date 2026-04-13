import "./App.css";
import LandingPage from "./pages/LandingPage";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Team from "./components/Team";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-stone-900 font-sans">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
