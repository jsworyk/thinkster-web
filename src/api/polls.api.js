import axios from "axios";
export const API_URL = "https://api.thinkster.ca";
export const APIV2_URL = "https://apiv21.thinkster.ca";

export const getPoll = (applicationToken, PollId) => {
  return axios
    .get(APIV2_URL + `/api/poll/${PollId}`, {
      headers: {
        ApplicationToken: applicationToken,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {});
};

export const submitAnswer = ({
  ApplicationToken,
  PollId,
  Response,
  ResponseVisibility = "PU",
  FollowerQuestionId = null,
}) => {
  return axios
    .post(`${API_URL}/submitanswer`, {
      ApplicationToken,
      PollId,
      Response,
      ResponseVisibility,
      ...(FollowerQuestionId && { FollowerQuestionId }),
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const getPollResults = ({
  ApplicationToken,
  GenderCode,
  PollId,
  MinimumAge,
  MaximumAge,
  Count,
  Offset,
  GroupId,
  Education,
  Religion,
  Ethnicity,
}) => {
  return axios
    .post(
      `${APIV2_URL}/api/poll/filter/${PollId}`,
      {
        GenderCode,
        MinimumAge,
        MaximumAge,
        Count,
        Offset,
        GroupId,
        Education,
        Religion,
        Ethnicity,
      },
      {
        headers: {
          ApplicationToken,
        },
      }
    )
    .then((pollData) => {
      const { data } = pollData;
      return data;
    })
    .catch((err) => console.log(err));
};

export const getResponseCountForChoices = async ({
  ApplicationToken,
  GenderCode,
  MinimumAge,
  MaximumAge,
  PollId,
  GroupId,
  Education,
  Religion,
  Ethnicity,
}) => {
  return axios
    .post(
      `${APIV2_URL}/api/poll/${PollId}`,
      {
        GenderCode,
        MinimumAge,
        MaximumAge,
        GroupId,
        Education,
        Religion,
        Ethnicity,
      },
      {
        headers: {
          ApplicationToken,
        },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err, "filtered_poll_error");
    });
};
