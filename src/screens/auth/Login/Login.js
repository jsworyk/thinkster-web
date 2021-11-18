import React, { useState, useEffect } from "react";
import { Input, Button } from "../../../components";
import { styles, fields } from "./style";
import logo from "../../../assets/text-logo.png";
import { getApplicationToken, login } from "../../../api/auth.api";
import { useHistory, withRouter, useLocation } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const [loginRequest, setLoginRequest] = useState({});
  const [loading, setLoading] = useState(false);
  const { container, logoStyle, createNewAccount } = styles;
  let PollId = 0;
  if (location && location.state) {
    PollId = location.state.PollId;
  }
  const handleFieldChanged = (key, value) => {
    const data = value.target.value;
    let obj = loginRequest;
    obj[key] = data;
    setLoginRequest({ ...loginRequest });
  };

  const handleLoginAttempt = async () => {
    setLoading(true);
    localStorage.clear();
    const applicationToken = await getApplicationToken(
      "b7b77c851cbfe5d23e3de48b5eed2c67",
      "8d113b2412c13ccf445fcd7ae6666a96"
    );
    const request = await login(
      applicationToken,
      loginRequest["Email"],
      loginRequest["Password"]
    );
    if (request) {
      history.push({
        pathname: `/poll/${PollId}`,
        state: {
          PollId,
        },
      });
      localStorage.setItem("applicationToken", applicationToken);
    }
    setLoading(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("applicationToken");
    if (token) {
      history.push({
        pathname: `/poll/${PollId}`,
        state: {
          PollId,
        },
      });
    }
  }, []);

  return (
    <LoadingOverlay active={loading} spinner text="Logging Into Thinkster">
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
          <h2>Sign In</h2>
          {fields.map((el) => (
            <Input
              onChange={(value) => handleFieldChanged(el.field, value)}
              placeholder={el.placeholder}
              type={el.type}
            />
          ))}
          <Button onClick={handleLoginAttempt} text="Enter" />
        </div>
        <h2
          onClick={() =>
            history.push({
              pathname: `/register`,
              state: {
                PollId,
              },
            })
          }
          style={createNewAccount}
        >
          Create New Account
        </h2>
      </div>
    </LoadingOverlay>
  );
};

export default withRouter(Login);
