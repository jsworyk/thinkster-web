import React from "react";

const styles = {
  input: {
    padding: 12,
    borderRadius: 25,
    borderWidth: 0,
    backgroundColor: "rgb(242,246,255)",
    width: 300,
    marginBottom: 12,
  },
};

const Input = ({ placeholder, onChange, type }) => {
  const { input } = styles;
  return (
    <input
      style={input}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
};
export default Input;
