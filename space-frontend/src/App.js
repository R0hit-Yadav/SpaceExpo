import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Planet from './components/Planet';
import Profile from './components/Profile';
import About from './components/About';
import AI from './components/AI';
import AiButton from './components/AiButton';
import Earth from './3D models/Earth';
import Jupiter from './3D models/Jupiter';
import Mercury from './3D models/Mercury';
import Neptune from './3D models/Neptune';
import Saturn from './3D models/Saturn';
import Uranus from './3D models/Uranus';
import Venus from './3D models/Venus';
import LoadingWrapper from './components/Loading';
import SignupLogin from './components/SignupLogin';
import SpaceNews from './components/News';

import './App.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <LoadingWrapper>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/planet" element={<Planet />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<About />} />
                <Route path="/ai" element={<AI/>} /> 
                <Route path="/signup-login" element={<SignupLogin />} />

                <Route path="/earth" element={<Earth />} />
                <Route path="/jupiter" element={<Jupiter />} />
                <Route path="/marcury" element={<Mercury />} />
                <Route path="/neptune" element={<Neptune />} />
                <Route path="/saturn" element={<Saturn />} />
                <Route path="/uranus" element={<Uranus />} />
                <Route path="/Venus" element={<Venus />} />
                <Route path="/news" element={<SpaceNews/>}/>
            </Routes>
            </LoadingWrapper>
            <AiButton />
        </Router>
    );
}

export default App;
