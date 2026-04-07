import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from './components/Layout/PublicLayout';
import AppLayout from './components/Layout/AppLayout';
import Landing from './pages/Landing';
import { Login, Signup } from './pages/Auth';
import Dashboard from './pages/Dashboard';
import AppPage from './pages/AppPage';
import { Settings, History, Templates } from './pages/Pages';
import { Recorder, Profile, Playground } from './pages/ExtraPages';

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* App Routes */}
      <Route element={<AppLayout title="Dashboard" />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      
      <Route element={<AppLayout title="Workflow Builder" />}>
        <Route path="/app" element={<AppPage />} />
      </Route>

      <Route element={<AppLayout title="AI Playground" />}>
        <Route path="/playground" element={<Playground />} />
      </Route>

      <Route element={<AppLayout title="Execution History" />}>
        <Route path="/history" element={<History />} />
      </Route>

      <Route element={<AppLayout title="Templates" />}>
        <Route path="/templates" element={<Templates />} />
      </Route>

      <Route element={<AppLayout title="Voice Recorder" />}>
        <Route path="/recorder" element={<Recorder />} />
      </Route>

      <Route element={<AppLayout title="User Profile" />}>
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route element={<AppLayout title="Settings" />}>
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
