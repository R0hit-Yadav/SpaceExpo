import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Planet from "./components/Planet";
import Profile from "./components/Profile";
import About from "./components/About";
import AI from "./components/AI";
import AiButton from "./components/AiButton";
import Earth from "./3D models/Earth";
import Rocket from "./components/Rocket";
import Jupiter from "./3D models/Jupiter";
import Mercury from "./3D models/Mercury";
import Neptune from "./3D models/Neptune";
import Saturn from "./3D models/Saturn";
import Uranus from "./3D models/Uranus";
import Venus from "./3D models/Venus";
import Mars from "./3D models/Mars";
import LoadingWrapper from "./components/Loading";
import SpaceNews from "./components/News";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import { Navigate } from "react-router-dom";

import "./App.css";

function Logout() {
  localStorage.clear();
  return <Navigate to="/" />;
}


const App = () => {
  return (
    <Router>
      <Navbar />
      <LoadingWrapper>
        <Routes>
          <Route path="/" element={<Home />} />

            <Route path="/planet" element={ <ProtectedRoute><Planet /></ProtectedRoute> } />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/ai" element={<AI />} />
            <Route path="/earth" element={<Earth />} />
            <Route path="/jupiter" element={<Jupiter />} />
            <Route path="/Mercury" element={<Mercury />} />
            <Route path="/neptune" element={<Neptune />} />
            <Route path="/saturn" element={<Saturn />} />
            <Route path="/uranus" element={<Uranus />} />
            <Route path="/Venus" element={<Venus />} />
            <Route path="/Mars" element={<Mars />} />
            <Route path="/news" element={<SpaceNews />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/rocket" element={<Rocket />} />
            <Route path="/register" element={<Register />} />

          
        </Routes>
      </LoadingWrapper>
      <AiButton />
    </Router>
  );
};

export default App;

