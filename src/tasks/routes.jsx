import React from 'react';
import Resume from '../Resume/sample';
import Addcart from '../addcart/addcart';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function Hello() {
    return (
        <div>
            <Router>
                <nav>
                    <Link to="/resume">Resume</Link>
                    <Link to="/addcart">Addcart</Link>
                </nav>
                <Routes>
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/addcart" element={<Addcart />}/>
                </Routes>
            </Router>
        </div>
    );
}
