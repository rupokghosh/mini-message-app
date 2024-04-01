const UsernameInput = (value, onChange) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default UsernameInput;
