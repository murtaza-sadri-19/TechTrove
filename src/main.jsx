import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./index.css";
import App from "./App";
import { initializeGoogleAnalytics } from "./utils/analytics";

// Make React globally available for dependencies like its-fine
window.React = React;

// Initialize Google Analytics with GA4 ID from environment
const GA4_ID = import.meta.env.VITE_GA4_ID;
if (GA4_ID && GA4_ID !== 'G-XXXXXXXXXX') {
  initializeGoogleAnalytics(GA4_ID);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>
);
