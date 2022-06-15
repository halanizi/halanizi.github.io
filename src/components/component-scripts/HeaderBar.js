import $ from "jquery";

export default {
  methods: {
    goToHome() {
      $("html, body").animate({ scrollTop: 0 }, "50");
      //   window.scrollTo({ top: 0, behavior: "smooth" });
      // window.scrollTo({top: 0, behavior: 'smooth'});
      // document.body.scrollTop = document.documentElement.scrollTop=0;
    },
    goToWork() {},
    goToContact() {},
    goToResume() {},
    goToAbout() {},
  },
};
