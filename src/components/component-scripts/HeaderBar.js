import $ from "jquery";

export default {
  methods: {
    goToHome() {
      $("html, body").animate({ scrollTop: 0 }, "50");
    },
    goToWork() {},
    goToContact() {},
    goToResume() {},
    goToAbout() {
      document
        .getElementById("aboutSection")
        .scrollIntoView({ behavior: "smooth" });
    },
  },
};
