import React from "react";
import { styles } from "./styles";
import { submitAnswer } from "../../api/polls.api";
const PreAnswerBar = ({
  item,
  token,
  pollData,
  setAnswerSubmitted,
  answerSubmitted,
}) => {
  const { container, choiceTextStyle } = styles;
  const { Choice, PollChoiceId } = item;
  const { PollId } = pollData;
  console.log({ item });
  const handleSubmitAnswer = async () => {
    await submitAnswer({
      ApplicationToken: token,
      PollId,
      Response: PollChoiceId,
    });
    setAnswerSubmitted(!answerSubmitted);
  };

  return (
    <div onClick={handleSubmitAnswer} style={container}>
      <h6 style={choiceTextStyle}>{Choice}</h6>
    </div>
  );
};
export default PreAnswerBar;
