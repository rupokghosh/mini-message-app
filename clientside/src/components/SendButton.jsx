import PropTypes from "prop-types";
const SendButton = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Send
      </button>
    </div>
  );
};

SendButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default SendButton;
