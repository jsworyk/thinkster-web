import React, { useEffect, useState } from "react";
import { getResponseCountForChoices } from "../../api/polls.api";
import PostAnswerBar from "../../components/post-answer-bar/PostAnswerBar";
import PollFilters from "../../components/poll-filters/PollFilters";
import { initialFilterState } from "./config";
const PostAnswer = ({ pollData, token }) => {
  const [responseData, setResponseData] = useState(null);
  const [filterState, setFilterState] = useState(initialFilterState);

  const getSelectionCountBasedOnGenderFilter = (
    filteredResponseData,
    gender,
    pollChoiceId
  ) => {
    let total = 0;
    filteredResponseData.forEach((r) => {
      if (r.GenderCode === gender && r.PollChoiceId === pollChoiceId) {
        total += r.ResponseCount;
      }
    });
    return total;
  };

  const getSelectionCountOnAnyFilter = (filteredResponseData, pollChoiceId) => {
    let total = 0;
    filteredResponseData.forEach((r) => {
      if (r.PollChoiceId === pollChoiceId) {
        total += r.ResponseCount;
      }
    });
    return total;
  };

  const getDenominator = (pollData) => {
    let total = 0;
    pollData.forEach((r) => {
      total += r.ResponseCount;
    });
    return total;
  };

  useEffect(() => {
    getResponseCountForChoices({
      PollId: pollData.PollId,
      ApplicationToken: token,
      ...filterState,
    }).then((res) => {
      const { GenderCode } = filterState;
      const { Choices, ResponseDetails } = res;
      if (GenderCode) {
        Choices.forEach((choice) => {
          choice["SelectionCount"] = getSelectionCountBasedOnGenderFilter(
            ResponseDetails,
            GenderCode,
            choice.PollChoiceId
          );
        });
      } else {
        Choices.forEach((choice) => {
          const { PollChoiceId } = choice;
          choice["SelectionCount"] = getSelectionCountOnAnyFilter(
            ResponseDetails,
            PollChoiceId
          );
        });
      }
      res.ResponseCount = getDenominator(ResponseDetails);
      setResponseData(res);
      console.log({ res });
    });
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
      <h6>{responseData.ResponseCount} Total Responses</h6>
      <PollFilters
        token={token}
        filterState={filterState}
        setFilterState={setFilterState}
      />
    </div>
  );
};
export default PostAnswer;
