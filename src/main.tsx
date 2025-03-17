
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Ensure the DOM is fully loaded before mounting
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(<App />);
