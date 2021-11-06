export const filterConfig = [
  {
    label: "Gender",
    values: [
      {
        label: "All",
        value: null,
      },
      {
        label: "Male",
        value: "MA",
      },
      {
        label: "Female",
        value: "FE",
      },
      {
        label: "Other",
        value: "OT",
      },
    ],
  },
  {
    label: "Age",
    values: [
      {
        label: "All",
        value: {
          min: 0,
          max: 100,
        },
      },
      {
        label: "17-24",
        value: {
          min: 17,
          max: 24,
        },
      },
      {
        label: "15-34",
        value: {
          min: 25,
          max: 34,
        },
      },
      {
        label: "35-44",
        value: {
          min: 35,
          max: 44,
        },
      },
      {
        label: "45-54",
        value: {
          min: 45,
          max: 54,
        },
      },
      {
        label: "55-64",
        value: {
          min: 55,
          max: 64,
        },
      },
      {
        label: "65+",
        value: {
          min: 65,
          max: 110,
        },
      },
    ],
  },
];
