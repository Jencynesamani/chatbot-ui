// ===========================================================
// ChatApp.jsx
// Project: OpenAI_API_Python (React Frontend)
// Course: Designing Conversational AI
//
// Purpose:
// This file creates a React-based frontend UI for the chatbot.
//
// Architecture:
// React UI  →  Flask API  →  Chatbot Logic  →  OpenAI API
//
// IMPORTANT:
// - React NEVER talks directly to OpenAI
// - React communicates only with Flask backend (/chat API)
// - AI logic remains in Python (single AI brain)
// ===========================================================


// -----------------------------------------------------------
// Import CSS file for UI styling
// -----------------------------------------------------------

import "./ChatApp.css";
// This file controls layout, spacing, fonts, and colors
// Separates design (CSS) from logic (JavaScript)


// -----------------------------------------------------------
// Import React Hook
// -----------------------------------------------------------

import { useState } from "react";
// useState is a React Hook
// It allows functional components to store and update data
// Example usage: input text, chatbot response


// -----------------------------------------------------------
// ChatApp Component Definition
// -----------------------------------------------------------

function ChatApp() {

  // ---------------------------------------------------------
  // STATE VARIABLES
  // ---------------------------------------------------------

  const [userInput, setUserInput] = useState("");
  // Stores what the user types in the input box
  // userInput  → current value
  // setUserInput → function to update the value

  const [response, setResponse] = useState("");
  // Stores chatbot response received from Flask backend
  // When updated, UI automatically re-renders


  // ---------------------------------------------------------
  // FUNCTION: Send message to backend API
  // ---------------------------------------------------------

  const sendMessage = () => {

    // fetch() sends an HTTP request to the Flask backend
    fetch("http://localhost:5000/chat", {

      method: "POST",
      // POST is used to securely send data to backend

      headers: {
        "Content-Type": "application/json"
      },
      // Informs backend that request body is JSON

      body: JSON.stringify({
        message: userInput
      })
      // Converts JavaScript object into JSON string
      // Example:
      // { "message": "Hello" }
    })

    .then(res => res.json())
    // Converts backend response from JSON to JavaScript object

    .then(data => {
      setResponse(data.response);
      // Stores chatbot reply in state
      // React automatically updates the UI
    })

    .catch(error => {
      console.error("Error:", error);
      // Prints error in browser console (for debugging)

      setResponse("Error connecting to backend.");
      // Shows user-friendly error message
    });
  };


  // ---------------------------------------------------------
  // UI RENDERING (JSX)
  // ---------------------------------------------------------
  // JSX looks like HTML but is actually JavaScript
  // React uses JSX to describe UI components
  // ---------------------------------------------------------
const [provider, setProvider] = useState("gemini");

<select onChange={(e) => setProvider(e.target.value)}>
  <option value="gemini">Gemini</option>
  <option value="openai">OpenAI</option>
  <option value="claude">Claude</option>
</select>
body: JSON.stringify({
  message: userInput,
  provider: provider
})


  return (
    <div className="container">
      {/* Main container for chatbot UI */}

      <h2>🤖 OpenAI Chatbot</h2>
      {/* Chatbot title */}

      <input
        type="text"
        value={userInput}
        // Binds input field value to React state

        onChange={(e) => setUserInput(e.target.value)}
        // Updates state whenever user types

        placeholder="Type your message..."
      />

      <button onClick={sendMessage}>
        Send
      </button>
      {/* Button triggers API call to Flask backend */}

      {response && (
        // Conditional rendering:
        // Response box appears ONLY if response exists

        <div className="chatbot">
          <strong>Chatbot:</strong> {response}
          {/* Displays chatbot reply */}
        </div>
      )}
    </div>
  );
}


// -----------------------------------------------------------
// Export Component
// -----------------------------------------------------------

export default ChatApp;
// Makes this component available to be used in App.js
