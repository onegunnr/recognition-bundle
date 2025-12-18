import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ConfirmedPage from './components/ConfirmedPage';

/**
 * README FOR DEVELOPER:
 * 
 * This application is built with React + Tailwind, simulating the requested HTML structure.
 * 
 * CONFIGURATION STEPS:
 * 1. Open `components/LandingPage.tsx`.
 * 2. Locate the <form> element.
 * 3. Replace `onSubmit` or `action` with your Email Provider's URL (ConvertKit, Mailchimp, etc.).
 * 4. Configure your Email Provider's "Confirmation Success Page" to redirect to:
 *    [Your-Domain]/#/confirmed
 * 
 * 5. Open `components/ConfirmedPage.tsx`.
 * 6. Replace the `href` attributes in the buttons with your actual file paths (e.g., AWS S3 links, Dropbox, or local /public/downloads).
 */

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen font-sans flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/confirmed" element={<ConfirmedPage />} />
            {/* Redirect unknown routes back to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;