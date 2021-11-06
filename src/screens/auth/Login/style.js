export const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
    height: window.innerHeight,
    flexDirection: "column",
    maxHeight: window.innerHeight,
    overflow: "hidden",
  },
  logoStyle: {
    width: 300,
    height: "100%",
    paddingBottom: 50,
  },
  createNewAccount: {
    display: "flex",
    textAlign: "center",
    cursor: "pointer",
    paddingBottom: 50,
    color: "#2962FF",
  },
};

export const fields = [
  {
    placeholder: "Email Address",
    field: "Email",
    type: "email",
  },
  {
    placeholder: "Password",
    field: "Password",
    type: "password",
  },
];
