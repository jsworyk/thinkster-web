import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { Navbar } from "../../components";
import { getPoll } from "../../api/polls.api";
import { getPollCategoryImage } from "./poll.util";
import { styles } from "./styles";
import PreAnswer from "./PreAnswer";
import PostAnswer from "./PostAnswer";

const Poll = (props) => {
  const { container, icon, categoryText } = styles;
  const [pollData, setPollData] = useState({});
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const token = localStorage.getItem("applicationToken");
  const { PollId } = props.match.params;
  useEffect(() => {
    if (token) {
      getPoll(token, PollId).then((poll) => {
        setPollData(poll);
      });
    }
  }, [token, answerSubmitted]);
  const history = useHistory();
  if (pollData && pollData.Question) {
    return (
      <Navbar>
        <div style={container}>
          <div style={{ display: "flex", marginBottom: 8 }}>
            <img
              src={getPollCategoryImage({ Category: pollData.Category })}
              style={icon}
            />
            <p style={categoryText}>{pollData.Category}</p>
          </div>
          <h3>{pollData.Question}</h3>
          {pollData.IsAnswered ? (
            <PostAnswer pollData={pollData} token={token} />
          ) : (
            <PreAnswer
              setAnswerSubmitted={setAnswerSubmitted}
              answerSubmitted={answerSubmitted}
              token={token}
              pollData={pollData}
            />
          )}
        </div>
      </Navbar>
    );
  }
  return null;
};

export default withRouter(Poll);
