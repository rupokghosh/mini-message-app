

const Chat = ({messages}) => {
  return <div>
    {messages.map((msg, index) => (
      <div key={index} className = "message">
        <p>msg.sender</p>
        <p>msg.messge</p>
      </div>
    ))}
  </div>;
};

export default Chat;
