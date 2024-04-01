import Header from "./components/Header";
import Card from "./components/Card";
import Chat from "./components/Chat";
import SendButton from "./components/SendButton";
import TextInput from "./components/TextInput";
import UsernameInput from "./components/UsernameInput";
import { useState } from "react";

function App() {
  // states

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");

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
