import React from "react";

const styles = {
  buttonWrapper: {
    backgroundColor: "#2962FF",
    padding: 12,
    width: 300,
    borderRadius: 8,
    cursor: "pointer",
  },
  buttonText: {
    margin: 0,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
};

const Button = ({ text, onClick }) => {
  const { buttonWrapper, buttonText } = styles;
  return (
    <div onClick={onClick} style={buttonWrapper}>
      <p style={buttonText}>{text}</p>
    </div>
  );
};

export default Button;
