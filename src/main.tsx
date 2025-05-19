import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import * as Sentry from "@sentry/react";
import { GrowthBookProvider } from '@growthbook/growthbook-react';
import { growthbook } from './growthbook';

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GrowthBookProvider growthbook={growthbook}>
      <Sentry.ErrorBoundary fallback={<p>Something went wrong</p>}>
        <App />
      </Sentry.ErrorBoundary>
    </GrowthBookProvider>
  </StrictMode>,
)
