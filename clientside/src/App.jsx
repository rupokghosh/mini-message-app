import Header from "./components/Header";
import Card from "./components/Card";
import Chat from "./components/Chat";
import SendButton from "./components/SendButton";
import TextInput from "./components/TextInput";
import UsernameInput from "./components/UsernameInput";
import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3000");

function App() {
  // useStates

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");

  // useEffects

  useEffect(() => {
    socket.on("message", (message) => {
      console.log(message);
      setMessages((prevMessage) => [...prevMessage, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  // send message to backend
  const sendMessage = () => {
    if (input.trim() && username) {
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
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Card>
          <Chat messages={messages} />
        </Card>
        <div className="flex flex-col justify-center items-center gap-2">
          <UsernameInput value={username} onChange={handleUsernameChange} />
          <TextInput value={input} onChange={handleInputChange} />
          <SendButton onClick={sendMessage} />
        </div>
      </div>
    </div>
  );
}

export default App;
