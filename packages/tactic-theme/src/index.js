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
      isActive: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
      searchBlogValue: "",
      // filterBlogValue: "",
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
      setToggleMenu: ({ state }) => (newState) => {
        state.theme.isActive = newState;
      },
      setSearchBlogValue: ({ state }) => (value) => {
        state.theme.searchBlogValue = value;
      },
      setFilterBlogValue: ({ state }) => (value) => {
        state.theme.filterBlogValue = value;
      },
      beforeSSR: async ({ actions }) => {
        await actions.source.fetch("/contactanos");
      },
    },
  },

  libraries: {
    html2react: {
      processors: [image, iframe, link],
    },
  },
};
