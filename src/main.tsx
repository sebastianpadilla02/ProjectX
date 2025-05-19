import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://31097acda447c111893acd07a85f5294@o4509347337207808.ingest.us.sentry.io/4509349310562304",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
