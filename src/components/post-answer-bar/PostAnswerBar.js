import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { getPollResults } from "../../api/polls.api";
import femalePlaceholder from "./female-placeholder.png";
import malePlaceholder from "./male-placeholder.png";

const PostAnswerBar = ({ item, responseData, token, filterState }) => {
  const { container, choiceTextStyle, avatar } = styles;
  const { PollId } = responseData;
  const { Choice, ChartColour, SelectionCount, PollChoiceId } = item;
  const { ResponseCount } = responseData;

  const [responses, setResponses] = useState([]);
  const [showingUsers, setShowingUsers] = useState(false);

  const handlePressShowUsers = () => setShowingUsers(!showingUsers);

  useEffect(() => {
    getPollResults({
      PollId,
      ApplicationToken: token,
      ...filterState,
    }).then((res) => {
      const arr = [];
      const { Responses } = res;
      Responses.forEach((r) => {
        if (r.PollChoiceId === PollChoiceId) {
          arr.push(r);
        }
      });
      setResponses(arr);
    });
  }, [filterState]);

  return (
    <>
      <div onClick={handlePressShowUsers} style={container}>
        <div
          style={{
            backgroundColor: ChartColour,
            width: `${(SelectionCount / ResponseCount) * 100}%`,
            padding: 12,
          }}
        >
          <h6 style={choiceTextStyle}>{Choice}</h6>
        </div>
      </div>
      {showingUsers &&
        responses.length > 0 &&
        responses.map((el) => {
          const { DisplayName, AvatarUrl, GenderCode, age } = el;
          if (age) {
            return (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  style={avatar}
                  src={
                    AvatarUrl
                      ? AvatarUrl
                      : GenderCode === "MA"
                      ? malePlaceholder
                      : femalePlaceholder
                  }
                />
                <p>{DisplayName}</p>
              </div>
            );
          }
        })}
    </>
  );
};
export default PostAnswerBar;
