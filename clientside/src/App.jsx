import Header from "./components/Header";
import Card from "./components/Card";
import Chat from "./components/Chat";
import SendButton from "./components/SendButton";
import TextInput from "./components/TextInput";
import UsernameInput from "./components/UsernameInput";
import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {
  // useStates

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");

  // useEffects

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  //

  const sendMessage = () => {
    if (input && username) {
      socket.emit("message", { sender: username, message: input });
      setInput("");
    }
  };

  // handle input

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <>
      <Header />
      <Card>
        <Chat messages={messages} />
      </Card>
      <div className="inputContainer">
        <UsernameInput value={username} onChange={handleUsernameChange} />
        <TextInput value={input} onChange={handleInputChange} />
        <SendButton onClick={sendMessage} />
      </div>
    </>
  );
}

export default App;
