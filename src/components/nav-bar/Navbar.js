import React, { useEffect, useState } from "react";
import { getCurrentUserProfile } from "../../api/auth.api";
import { useHistory } from "react-router-dom";
import { styles } from "./styles";

const Navbar = ({ children }) => {
  const { container, profilePhoto } = styles;
  const history = useHistory();
  const token = localStorage.getItem("applicationToken");
  const [profile, setProfile] = useState({});
  useEffect(() => {
    getCurrentUserProfile(token, "").then((p) => {
      setProfile(p);
    });
  }, []);
  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <div>
      <div onClick={handleLogout} style={container}>
        <img
          style={profilePhoto}
          src={
            profile && profile.AvatarThumbnailUrl
              ? profile.AvatarThumbnailUrl
              : null
          }
        />
      </div>
      {React.cloneElement(children, { ...profile })}
    </div>
  );
};
export default Navbar;
