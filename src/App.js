// ============================================================
// App.js
// Project: OpenAI_React_UI
// Course: Designing Conversational AI
//
// Purpose:
// This file acts as the ROOT component of the React application.
//
// In React:
// - App.js is the main entry component
// - All other components are rendered inside App
//
// In our project:
// - App.js loads the ChatApp component
// - ChatApp contains the chatbot UI and logic
// ============================================================


// ------------------------------------------------------------
// Import ChatApp Component
// ------------------------------------------------------------

import ChatApp from "./ChatApp";
// Imports the ChatApp component from ChatApp.jsx
// ChatApp is responsible for:
// - Rendering chatbot UI
// - Handling user input
// - Communicating with Flask backend


// ------------------------------------------------------------
// App Component Definition
// ------------------------------------------------------------

function App() {
  // This is a functional React component
  // It returns JSX (HTML-like syntax)

  return <ChatApp />;
  // Renders the ChatApp component
  // This means the chatbot UI becomes the main app UI
}


// ------------------------------------------------------------
// Export App Component
// ------------------------------------------------------------

export default App;
// Makes App component available to:
// - index.js
// - ReactDOM rendering

