import React, { useEffect, useState } from "react";
import { getResponseCountForChoices } from "../../api/polls.api";
import PostAnswerBar from "../../components/post-answer-bar/PostAnswerBar";
import PollFilters from "../../components/poll-filters/PollFilters";
import { initialFilterState } from "./config";
const PostAnswer = ({ pollData, token }) => {
  const [responseData, setResponseData] = useState(null);
  const [filterState, setFilterState] = useState(initialFilterState);
  useEffect(() => {
    getResponseCountForChoices({
      PollId: pollData.PollId,
      ApplicationToken: token,
      ...filterState,
    }).then((res) => setResponseData(res));
  }, [filterState]);
  if (!responseData) return null;
  return (
    <div>
      {responseData.Choices.map((el) => (
        <PostAnswerBar
          token={token}
          responseData={responseData}
          item={el}
          filterState={filterState}
        />
      ))}
      <PollFilters
        token={token}
        filterState={filterState}
        setFilterState={setFilterState}
      />
    </div>
  );
};
export default PostAnswer;
