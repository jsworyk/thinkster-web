import React from "react";
import { styles } from "./styles";
const PreAnswerBar = ({ item }) => {
  const { container, choiceTextStyle } = styles;
  const { Choice } = item;
  return (
    <div style={container}>
      <h6 style={choiceTextStyle}>{Choice}</h6>
    </div>
  );
};
export default PreAnswerBar;
