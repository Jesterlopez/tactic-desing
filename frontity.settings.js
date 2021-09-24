const settings = {
  name: 'tactic-center',

  state: {
    frontity: {
      url: 'https://tactic-build.tactic-center.com/',
      title: 'Tactic Digital',
      description:
        'Agencia especializada en Inbound Marketing y Optimización de procesos'
    }
  },
  packages: [
    {
      name: 'tactic-theme'
    },
    {
      name: '@frontity/wp-source',
      state: {
        source: {
          api: 'https://admin-tactic.tactic-center.com/wp-json/',
          params: {
            per_page: 12
          },
          postTypes: [
            {
              type: 'blog',
              endpoint: 'blog',
              archive: '/blog'
            },
            {
              type: 'servicios',
              endpoint: 'servicios',
              archive: '/servicios'
            }
          ]
        }
      }
    },
    '@frontity/tiny-router',
    '@frontity/html2react',
    '@aamodtgroup/frontity-contact-form-7'
  ]
}

export default settings
