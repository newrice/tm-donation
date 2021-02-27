// eslint-disable-next-line import/no-anonymous-default-export
export default {
  api: {
    production: "https://h0x0vwtnni.execute-api.ap-northeast-1.amazonaws.com",
    development: "https://h0x0vwtnni.execute-api.ap-northeast-1.amazonaws.com",
    test: "http://localhost:3001",
  },
  url: {
    donations: "/donations",
  },
  app: {
    donation: {
      目標額: 5275,
      締切: new Date(2021, 2, 19, 23, 59, 59),
    },
  },
  constants: {
    newId: "__new__",
  },
};
