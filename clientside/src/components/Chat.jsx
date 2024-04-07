import PropTypes from "prop-types";

const Chat = ({ messages }) => {
  return (
    <div>
      {messages.map((msg, index) => (
        <div key={index} className="message">
          <p>{msg.sender}</p>
          <p>{msg.message}</p>
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
