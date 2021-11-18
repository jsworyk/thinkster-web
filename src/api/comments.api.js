import axios from "axios";
export const API_URL = "https://api.thinkster.ca";
export const APIV2_URL = "https://apiv21.thinkster.ca";

export const getComments = ({
  ApplicationToken,
  TargetTypeCode,
  TargetId,
  ReplyToCommentId,
  LastCommentId,
  NumberOfComments,
}) =>
  axios
    .post(API_URL + "/getcomments", {
      ApplicationToken,
      TargetTypeCode,
      TargetId,
      LastCommentId,
      ReplyToCommentId,
      NumberOfComments,
    })
    .then((response) => {
      const { data } = response;

      return data;
    })
    .catch((error) => {
      console.log({ error });
    });
