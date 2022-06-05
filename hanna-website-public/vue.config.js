module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/hanna_website_public/" : "/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@/assets/styles/_variables.scss";
            @import "@/assets/styles/_mixins.scss";
          `,
      },
    },
  },
};
