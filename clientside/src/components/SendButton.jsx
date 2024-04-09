import PropTypes from "prop-types";
const SendButton = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-pink-500 hover:bg-pink-800 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="36"
        >
          <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
        </svg>
      </button>
    </div>
  );
};

SendButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default SendButton;
