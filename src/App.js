import React, { useEffect, useState } from "react";
import Message from "./Message";
import "./App.css";
import { FormControl, Input } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";

function App() {
  //State
  const [input, setInput] = useState(""); // This is a react hook
  const [messages, setMessages] = useState([]); // Initialize it with an array to store the messages in an array
  const [username, setUsername] = useState(""); // Setting up Username

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            message: doc.data(),
          }))
        );
      });
  }, []);

  useEffect(() => {
    // useEffect runs code based on a condition
    // Run the code here
    setUsername(prompt("Please enter your name"));
    // when the dependancy changes the function gets invoked.
  }, []); // Condition here, we call this dependancy. If dependecy is blnk, the page loads once.

  // console.log(messages);
  // console.log(input);

  const sendMessage = (event) => {
    // prevent default form submission
    event.preventDefault();
    // all the logic to send the message
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setMessages([...messages, { username: username, message: input }]); // Spread array
    setInput("");
  };

  return (
    <div className="App">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100"
        alt=""
      />
      <h1>Welcome to Messenger App</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          {/* input field */}
          <Input
            className="app__input"
            placeholder="Enter a message.."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          {/* button */}
          <IconButton
            className="app__iconButton"
            color="primary"
            variant="contained"
            type="submit"
            disabled={!input.trim()}
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {/* messages themselves */}
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} /> // Message Component
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
