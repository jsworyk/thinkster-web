import React from "react";
import apple from "../../assets/ios-app-store.png";
import google from "../../assets/google-play.png";
import fb from "../../assets/fb.png";
import ig from "../../assets/ig.png";
import twitter from "../../assets/twitter.png";

const styles = {
  appStore: {
    width: 150,
    height: 100,
    objectFit: "contain",
    cursor: "pointer",
  },
  social: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: 8,
  },
};

const appStoreIcons = [
  {
    link: () =>
      window.location.replace(
        "https://apps.apple.com/ca/app/thinkster-social-polling/id1493132035"
      ),
    imageSource: apple,
  },
  {
    link: () =>
      window.location.replace(
        "https://play.google.com/store/apps/details?id=ca.thinkster.android&hl=en_US&gl=US&showAllReviews=true"
      ),
    imageSource: google,
  },
];

const socialIcons = [
  {
    link: () =>
      window.location.replace("https://www.facebook.com/ThinksterApp"),
    imageSource: fb,
  },
  {
    link: () =>
      window.location.replace(
        "https://www.instagram.com/thinksterapp/?utm_source=ig_embed&ig_rid=2c174dcc-c304-4056-94da-bf7d35f12138"
      ),
    imageSource: ig,
  },
  {
    link: () =>
      window.location.replace("https://mobile.twitter.com/thinksterapp"),
    imageSource: twitter,
  },
];

const AppLinks = () => {
  const { appStore, social } = styles;
  return (
    <div>
      {appStoreIcons.map((el) => (
        <img onClick={el.link} src={el.imageSource} style={appStore} />
      ))}
      <div style={{ display: "flex", flexDirection: "row" }}>
        {socialIcons.map((el) => (
          <img src={el.imageSource} style={social} />
        ))}
      </div>
    </div>
  );
};
export default AppLinks;
