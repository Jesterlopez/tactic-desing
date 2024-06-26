import Root from './Root'
import image from '@frontity/html2react/processors/image'
import iframe from '@frontity/html2react/processors/iframe'
import link from '@frontity/html2react/processors/link'

export default {
  name: 'tactic-theme',
  roots: {
    theme: Root
  },
  state: {
    theme: {
      autoPrefetch: 'in-view',
      menu: [],
      isMobileMenuOpen: false,
      isActive: false,
      formPopup: '',
      featured: {
        showOnList: false,
        showOnPost: false
      },
      searchBlogValue: ''
    }
  },
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false
      },
      setToggleMenu: ({ state }) => (newState) => {
        state.theme.isActive = newState
      },
      setSearchBlogValue: ({ state }) => (value) => {
        state.theme.searchBlogValue = value
      },
      setFilterBlogValue: ({ state }) => (value) => {
        state.theme.filterBlogValue = value
      },
      setFormPopup: ({ state }) => (value) => {
        state.theme.formPopup = value
      },
      beforeSSR: async ({ state, actions }) => {
        await actions.source.fetch('/b2b-form')
        await actions.source.fetch('/contact-us')
        await actions.source.fetch('/affiliate-page')

        await actions.source.fetch('/subscribe')
        await actions.source.fetch('/blog')
      }
    }
  },

  libraries: {
    html2react: {
      processors: [image, iframe, link]
    }
  }
}
