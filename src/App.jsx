import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SQLDashboard from './pages/SQLDashboard';



import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/projects/sql" element={<SQLDashboard />} />
        </Routes>
    );
}

export default App;
