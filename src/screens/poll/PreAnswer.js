import React from "react";
import PreAnswerBar from "../../components/pre-answer-bar/PreAnswerBar";

const PreAnswer = ({
  pollData,
  token,
  answerSubmitted,
  setAnswerSubmitted,
}) => {
  return (
    <>
      {pollData &&
        pollData.Choices &&
        pollData.Choices.map((el) => (
          <PreAnswerBar
            answerSubmitted={answerSubmitted}
            setAnswerSubmitted={setAnswerSubmitted}
            token={token}
            item={el}
            pollData={pollData}
          />
        ))}
    </>
  );
};
export default PreAnswer;
