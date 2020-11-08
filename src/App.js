import React, { useState } from "react";
import Message from "./Message";
import "./App.css";
import { Button } from "@material-ui/core";

function App() {
  //State
  const [input, setInput] = useState(""); // This is a react hook
  const [messages, setMessages] = useState([]); // Initialize it with an array to store the messages in an array

  // console.log(messages);
  // console.log(input);

  const sendMessage = (event) => {
    // prevent default form submission
    event.preventDefault();
    // all the logic to send the message
    setMessages([...messages, input]); // Spread array
    setInput("");
  };

  return (
    <div className="App">
      <h1>Welcome to Messenger App</h1>
      <form>
        {/* input field */}
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        {/* button */}
        <Button color="primary" variant="contained" type="submit" disabled={!input.trim()} onClick={sendMessage}>
          Send Message
        </Button>
        {/* messages themselves */}
        {messages.map((message) => (
          <Message message={message}/>  // Message Component
        ))}
      </form>
    </div>
  );
}

export default App;
