import React, { useState, useEffect } from "react";
import { Input, Button } from "../../../components";
import { styles, fields } from "./style";
import logo from "../../../assets/text-logo.png";
import { getApplicationToken, signup, login } from "../../../api/auth.api";
import { useHistory, withRouter } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";

const Signup = () => {
  const history = useHistory();
  const [signupRequest, setSignupRequest] = useState({});
  const [loading, setLoading] = useState(false);
  const { container, logoStyle, createNewAccount } = styles;
  const handleFieldChanged = (key, value) => {
    const data = value.target.value;
    let obj = signupRequest;
    obj[key] = data;
    setSignupRequest({ ...signupRequest });
  };

  const handleSignupRequest = async () => {
    setLoading(true);
    localStorage.clear();
    const applicationToken = await getApplicationToken(
      "b7b77c851cbfe5d23e3de48b5eed2c67",
      "8d113b2412c13ccf445fcd7ae6666a96"
    );
    const request = await signup(
      applicationToken,
      signupRequest["Name"].split(" ")[0],
      signupRequest["Name"].split(" ").length > 1
        ? signupRequest["Name"].split(" ")[1]
        : " ",
      signupRequest["Email"],
      signupRequest["Password"]
    );
    const response = await login(
      applicationToken,
      signupRequest["Email"],
      signupRequest["Password"]
    );
    if (response) {
      history.push("/poll/123");
      localStorage.setItem("applicationToken", applicationToken);
    }
    setLoading(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("applicationToken");
    if (token) {
      history.push("/poll/123");
    }
  }, []);

  return (
    <LoadingOverlay active={loading} spinner text="Creating Account">
      <div style={container}>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            paddingTop: 100,
          }}
        >
          <img alt="Thinkster logo" style={logoStyle} src={logo} />
          <h2>Create Account</h2>
          {fields.map((el) => (
            <Input
              onChange={(value) => handleFieldChanged(el.field, value)}
              placeholder={el.placeholder}
              type={el.type}
            />
          ))}
          <Button onClick={handleSignupRequest} text="Enter" />
        </div>
        <h2 onClick={() => history.push("/")} style={createNewAccount}>
          Back To Login
        </h2>
      </div>
    </LoadingOverlay>
  );
};

export default withRouter(Signup);
