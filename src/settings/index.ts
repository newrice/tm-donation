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
      タイトル: "藤渕さん：ご結構祝いコメント&ご祝儀",
      目標額: 5275,
      締切: new Date(2021, 6, 19, 23, 59, 59),
      寄付額: {
        MAX: 2000,
        MIN: 500,
        目安表示額: 1000,
      },
    },
  },
  constants: {
    newId: "__new__",
  },
};
