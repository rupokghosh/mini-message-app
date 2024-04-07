import PropTypes from "prop-types";
const TextInput = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="type your message..."
        value={value}
        onChange={onChange}
        className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};
TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default TextInput;
