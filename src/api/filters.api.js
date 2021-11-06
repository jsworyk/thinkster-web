import axios from "axios";
export const API_URL = "https://api.thinkster.ca";
export const APIV2_URL = "https://apiv21.thinkster.ca";

export function getReligions(ApplicationToken) {
  return axios
    .get(`${APIV2_URL}/api/profile/religions`, {
      headers: {
        ApplicationToken,
      },
    })
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((err) => {
      console.log("religions_err", err);
    });
}

export function getEthnicities(ApplicationToken) {
  return axios
    .get(`${APIV2_URL}/api/profile/ethnicities`, {
      headers: {
        ApplicationToken,
      },
    })
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((err) => {
      console.log("ethnicities_err", err);
    });
}

export function getEducation(ApplicationToken) {
  return axios
    .get(`${APIV2_URL}/api/profile/educationLevels`, {
      headers: {
        ApplicationToken,
      },
    })
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((err) => {
      console.log("educationLevels_err", err);
    });
}
