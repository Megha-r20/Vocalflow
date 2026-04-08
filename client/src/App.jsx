import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Recorder from './pages/Recorder';
import FlowBuilder from './pages/FlowBuilder';
import History from './pages/History';
import Settings from './pages/Settings';
import ApiStatus from './pages/ApiStatus';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recorder" element={<Recorder />} />
        <Route path="/flow-builder" element={<FlowBuilder />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/api-status" element={<ApiStatus />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
