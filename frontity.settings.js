const settings = {
  "name": "tactic-center",
  "state": {
    "frontity": {
      "url": "http://tactic-center.test",
      "title": "Tactic Center",
      "description": "Agencia de publicidad"
    }
  },
  "packages": [
    {
      "name": "tactic-theme",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://tactic-center.test/wp-json/",
          "postTypes": [
            {
              type: "servicios",
              endpoint: "servicios",
              archive: "/servicios"
            }
        ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
