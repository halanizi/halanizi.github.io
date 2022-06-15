module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@/assets/styles/_variables.scss";
            @import "@/assets/styles/_mixins.scss";
            @import "@/assets/styles/_headerbar.scss";
          `,
      },
    },
  },
};
