import React from "react";
import PreAnswerBar from "../../components/pre-answer-bar/PreAnswerBar";

const PreAnswer = ({ pollData }) => {
  return (
    <>
      {pollData &&
        pollData.Choices &&
        pollData.Choices.map((el) => <PreAnswerBar item={el} />)}
    </>
  );
};
export default PreAnswer;
