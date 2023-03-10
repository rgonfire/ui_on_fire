import "../src/styles/tailwind.css";

const MY_VIEWPORTS = {
  XSM: {
    name: "xsm - 360px",
    styles: {
      width: "360px",
      height: "1080px",
    },
  },

  SM: {
    name: "sm - 640px",
    styles: {
      width: "640px",
      height: "1080px",
    },
  },
  MD: {
    name: "md - 768px",
    styles: {
      width: "768px",
      height: "1080px",
    },
  },
  LG: {
    name: "lg - 1024px",
    styles: {
      width: "1024px",
      height: "1080px",
    },
  },
  XL: {
    name: "xl - 1280px",
    styles: {
      width: "1280px",
      height: "1080px",
    },
  },
  XXL: {
    name: "2xl - 1536px",
    styles: {
      width: "1536px",
      height: "1080px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: MY_VIEWPORTS,
  },
};
