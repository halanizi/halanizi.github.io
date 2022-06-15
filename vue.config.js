module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@/assets/styles/_variables.scss";
            @import "@/assets/styles/_headerbar.scss";
            @import "@/assets/styles/_homecomponent.scss";

          `,
      },
    },
  },
};
