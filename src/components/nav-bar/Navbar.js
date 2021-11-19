import React, { useEffect, useState } from "react";
import { getCurrentUserProfile } from "../../api/auth.api";
import { useHistory } from "react-router-dom";
import { styles } from "./styles";
import malePlaceholder from "../post-answer-bar/male-placeholder.png";
import logo from "../../assets/text-logo.png";
const Navbar = ({ children, navProps }) => {
  const { container, profilePhoto, logoPhoto } = styles;
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
  const handleGoToMainSite = () => {
    window.location.replace("https://www.thinkster.info");
  };
  return (
    <div>
      <div style={container}>
        <img onClick={handleGoToMainSite} style={logoPhoto} src={logo} />
        <img
          onClick={handleLogout}
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
