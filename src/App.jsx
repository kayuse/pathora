import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from './pages/DashboardPage';
import AssessmentsPage from './pages/AssessmentsPage';
import CoachesPage from './pages/CoachesPage';
import CoachProfilePage from './pages/CoachProfilePage';
import BookSessionPage from './pages/BookSessionPage';
import ServicesPage from './pages/ServicesPage';
import CVUploadPage from './pages/CVUploadPage';
import CareerPathPage from './pages/CareerPathPage';
import ProfilePage from './pages/ProfilePage';

// Layout wrapper for authenticated pages (with sidebar)
function AppLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="app-layout">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <main className="main-content" style={{ marginLeft: 'var(--sidebar-width)' }}>
        {React.cloneElement(children, { setOpen: setSidebarOpen })}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />

        {/* Authenticated app pages */}
        <Route path="/dashboard" element={<AppLayout><DashboardPage /></AppLayout>} />
        <Route path="/assessments" element={<AppLayout><AssessmentsPage /></AppLayout>} />
        <Route path="/coaches" element={<AppLayout><CoachesPage /></AppLayout>} />
        <Route path="/coach/:id" element={<AppLayout><CoachProfilePage /></AppLayout>} />
        <Route path="/book-session" element={<AppLayout><BookSessionPage /></AppLayout>} />
        <Route path="/services" element={<AppLayout><ServicesPage /></AppLayout>} />
        <Route path="/cv-upload" element={<AppLayout><CVUploadPage /></AppLayout>} />
        <Route path="/career-path" element={<AppLayout><CareerPathPage /></AppLayout>} />
        <Route path="/profile" element={<AppLayout><ProfilePage /></AppLayout>} />
        <Route path="/settings" element={<AppLayout><ProfilePage /></AppLayout>} />
        <Route path="/messages" element={<AppLayout><DashboardPage /></AppLayout>} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
