import React from "react";
import Root from "./Root";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

export default {
  name: "tactic-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
      searchBlogValue: "",
      filterBlogValue: "",
    },
  },
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      setSearchBlogValue: ({ state }) => (value) => {
        state.theme.searchBlogValue = value;
      },
      setFilterBlogValue: ({ state }) => (value) => {
        state.theme.filterBlogValue = value;
      },
    },
  },
  // beforeSSR: async ({ state, actions }) => {
  //     await Promise.all(
  //       state.theme.templates.map((slug) =>
  //         actions.source.fetch(`/wp_template_part/${slug}`)
  //       )
  //     );
  //   },
  libraries: {
    html2react: {
      processors: [image, iframe, link],
    },
  },
};
