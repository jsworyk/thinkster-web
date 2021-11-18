import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { Navbar } from "../../components";
import { getPoll } from "../../api/polls.api";
import { getPollCategoryImage } from "./poll.util";
import { styles } from "./styles";
import PreAnswer from "./PreAnswer";
import PostAnswer from "./PostAnswer";
import LoadingOverlay from "react-loading-overlay";

const Poll = (props) => {
  const { container, icon, categoryText } = styles;
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [pollData, setPollData] = useState({});
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const token = localStorage.getItem("applicationToken");
  const { PollId } = props.match.params;
  useEffect(() => {
    if (token) {
      getPoll(token, PollId)
        .then((poll) => {
          setPollData(poll);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      history.push({
        pathname: "/",
        state: {
          PollId,
        },
      });
    }
  }, [token, answerSubmitted]);
  if (pollData && pollData.Question) {
    return (
      <LoadingOverlay active={loading} spinner text="Submitting Response">
        <Navbar navProps={props}>
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
                setLoading={setLoading}
                setAnswerSubmitted={setAnswerSubmitted}
                answerSubmitted={answerSubmitted}
                token={token}
                pollData={pollData}
              />
            )}
          </div>
        </Navbar>
      </LoadingOverlay>
    );
  }
  return null;
};

export default withRouter(Poll);
