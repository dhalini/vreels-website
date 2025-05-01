import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import App from './App';
import TermsAndConditions from './components/TermsandConditions'; // Import the TermsAndConditions component
import PrivacyPolicy from './components/Privacypolicy'; 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Default route for the homepage */}
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} /> {/* Route for the Terms and Conditions page */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
