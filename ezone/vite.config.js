const { resolve } = require("path");

module.exports = {
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        subpage: resolve(__dirname, "about.html"),
      },
    },
  },
};
