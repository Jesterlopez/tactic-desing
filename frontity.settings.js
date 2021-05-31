const settings = {
  name: "tactic-center",

  state: {
    frontity: {
      url: "https://tactic-build.tactic-center.com/",
      title: "Tactic Center",
      description:
        "agencia especializada en inbound Marketing y Optimización de procesos",
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
          api: "https://admin-tactic.tactic-center.com/wp-json",
          postTypes: [
            {
              type: "blog",
              endpoint: "blog",
              archive: "/blog",
            },
          ],
          // pages: [
          //   {
          //     type: "page",
          //     endpoint: "en",
          //     archive: "/en",
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
