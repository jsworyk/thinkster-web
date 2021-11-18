import React, { useEffect } from "react";

const CatchAll = () => {
  useEffect(() => {
    window.location.replace("https://www.thinkster.info");
  }, []);
  return (
    <div>
      <h1>Catch Al;</h1>
    </div>
  );
};
export default CatchAll;
