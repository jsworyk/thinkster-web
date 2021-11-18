import React, { useEffect, useState } from "react";
import { getCurrentUserProfile } from "../../api/auth.api";
import { useHistory } from "react-router-dom";
import { styles } from "./styles";
import malePlaceholder from "../post-answer-bar/male-placeholder.png";
const Navbar = ({ children, navProps }) => {
  const { container, profilePhoto } = styles;
  const history = useHistory();
  const token = localStorage.getItem("applicationToken");
  const [profile, setProfile] = useState({});
  const { PollId } = navProps.match.params;
  useEffect(() => {
    getCurrentUserProfile(token, "").then((p) => {
      setProfile(p);
    });
  }, []);
  const handleLogout = () => {
    localStorage.clear();
    history.push({
      pathname: "/",
      state: {
        PollId,
      },
    });
  };
  return (
    <div>
      <div onClick={handleLogout} style={container}>
        <img
          style={profilePhoto}
          src={
            profile && profile.AvatarThumbnailUrl
              ? profile.AvatarThumbnailUrl
              : malePlaceholder
          }
        />
      </div>
      {React.cloneElement(children, { ...profile })}
    </div>
  );
};
export default Navbar;
