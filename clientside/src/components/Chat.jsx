import PropTypes from "prop-types";

const Chat = ({ messages }) => {
  return (
    <div>
      {messages.map((msg, index) => (
        <div key={index} className="message bg-blue-100 rounded-lg p-2 mb-2">
          <div className="text-xs font-bold">{msg.sender}</div>
          <div className="bg-white rounded-lg p-2">{msg.message}</div>
        </div>
      ))}
    </div>
  );
};

// Define prop types for Chat component
Chat.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Chat;
