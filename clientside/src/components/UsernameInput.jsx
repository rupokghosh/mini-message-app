import PropTypes from "prop-types";
const UsernameInput = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Username"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

UsernameInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default UsernameInput;
