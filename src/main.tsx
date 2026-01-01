import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext'
import '@fontsource/victor-mono' // Defaults to weight 400
import '@fontsource/victor-mono/400-italic.css' // For that slick italic code
import '@fontsource/victor-mono/500.css' // Bold/Headers

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
