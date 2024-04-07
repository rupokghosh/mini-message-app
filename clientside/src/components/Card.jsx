import PropTypes from "prop-types";
const Card = ({ children }) => {
  return (
    <div
      className="max-w-lg mx-auto mt-4 p-4 border border-gray-300 rounded-md shadow-lg my-4"
      style={{ width: "50vw", height: "50vh" }}
    >
      {children}
    </div>
  );
};
Card.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Card;
