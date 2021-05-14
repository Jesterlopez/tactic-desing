const settings = {
  name: "tactic-center",
  state: {
    frontity: {
      url: "http://tactic-build.tactic-center.com/",
      title: "Tactic Center",
      description: "Agencia de publicidad",
    },
  },
  packages: [
    {
      name: "tactic-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "http://admin-tactic.tactic-center.com/wp-json",
          // postTypes: [
          //   {
          //     type: "servicio",
          //     endpoint: "servicio",
          //     archive: "/servicio",
          //   },
          // ],
          // pages: [
          //   {
          //     type: "page",
          //     endpoint: "sample",
          //     archive: "/sample-page",
          //   },
          // ],
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
