import React, { useEffect, useState } from "react";
import { getComments } from "../../api/comments.api";
import malePlaceholder from "../post-answer-bar/male-placeholder.png";
import moment from "moment";
const PollComments = ({ TargetId, TargetTypeCode }) => {
  const token = localStorage.getItem("applicationToken");
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments({
      ApplicationToken: token,
      TargetId,
      TargetTypeCode,
      LastCommentId: "",
      NumberOfComments: 10,
      ReplyToCommentId: "",
    }).then((c) => {
      if (c && c.Comments) {
        console.log(c.Comments);
        setComments(c.Comments);
      }
    });
  }, []);

  return (
    <div>
      <h4>Join The Discussion</h4>
      {comments &&
        comments.length > 0 &&
        comments.map((el) => {
          const { AvatarUrl, DisplayName, CommentText, Created } = el;
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    display: "flex",
                    alignSelf: "flex-start",
                  }}
                  src={AvatarUrl ? AvatarUrl : malePlaceholder}
                />
                <div style={{ marginLeft: 16 }}>
                  <p
                    style={{ margin: 0, fontWeight: "bold", color: "#2962FF" }}
                  >
                    {DisplayName}
                  </p>
                  <p style={{ margin: 0, marginTop: 6, marginBottom: 6 }}>
                    {CommentText}
                  </p>
                  <p style={{ margin: 0, fontSize: 11, color: "#979797" }}>
                    {moment(Created).fromNow()}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default PollComments;
