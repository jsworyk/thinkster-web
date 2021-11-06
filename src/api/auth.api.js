import axios from "axios";
export const API_URL = "https://api.thinkster.ca";
export const APIV2_URL = "https://apiv21.thinkster.ca";

export const login = async (ApplicationToken, Email, Password) => {
  console.log(ApplicationToken, Email, Password);
  return axios
    .post(
      `${APIV2_URL}/api/auth/signin`,
      {
        EmailAddress: Email,
        Password,
      },
      {
        headers: {
          ApplicationToken,
        },
      }
    )
    .then((response) => {
      const { data } = response;
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log({ err });
    });
};

export const getApplicationToken = async (ApplicationId, ApplicationSecret) => {
  return axios
    .post(`${API_URL}/getapplicationtoken`, {
      ApplicationId,
      ApplicationSecret,
      FCMToken:
        "e_YQpJeSDIg:APA91bEAXBMemLe09u29Z8WQI-5Z6eWohGivzs2ZmLXpvyW63jfOEEd5yKCmnSClx1oHqpLzpA6r5WFpkk-5hJoQ9fBswkCuq7Nutf13YJZClnV-0K4Y7IzwCNlFyda21nHL1JRQ_1Xi",
    })
    .then((response) => {
      return response.data.ApplicationToken;
    })
    .catch((err) => {
      console.log({ err });
    });
};

export const signup = (
  ApplicationToken,
  FirstName,
  LastName,
  EmailAddress,
  GenderCode,
  PostalCode,
  Password
) => {
  return axios
    .post(
      `${APIV2_URL}/api/signup`,
      {
        FirstName,
        LastName,
        EmailAddress,
        Password,
        PostalCode,
        GenderCode,
      },
      {
        headers: {
          ApplicationToken,
        },
      }
    )
    .then((response) => {
      console.log({ response });
      return true;
    })
    .catch((err) => console.log({ err }));
};

export const getCurrentUserProfile = async (applicationToken, profileName) => {
  return axios
    .post(API_URL + "/getprofile", {
      ApplicationToken: applicationToken,
      ProfileName: profileName,
    })
    .then(function (response) {
      return response.data.Profile;
    })
    .catch(function (error) {
      console.log("current_user_profile_error", error);
    });
};
