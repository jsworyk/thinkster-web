import React from "react";
import { styles } from "./styles";
import { submitAnswer } from "../../api/polls.api";
const PreAnswerBar = ({
  item,
  token,
  pollData,
  setAnswerSubmitted,
  answerSubmitted,
  setLoading,
}) => {
  const { container, choiceTextStyle } = styles;
  const { Choice, PollChoiceId } = item;
  const { PollId } = pollData;
  const handleSubmitAnswer = async () => {
    setLoading(true);
    await submitAnswer({
      ApplicationToken: token,
      PollId,
      Response: PollChoiceId,
    });
    setAnswerSubmitted(!answerSubmitted);
    setLoading(false);
  };

  return (
    <div onClick={handleSubmitAnswer} style={container}>
      <h6 style={choiceTextStyle}>{Choice}</h6>
    </div>
  );
};
export default PreAnswerBar;
