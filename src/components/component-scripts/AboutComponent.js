export default {
  data() {
    return {
      titles: [],
      captions: [],
      dates: [],
    };
  },
  methods: {
    setupTitles() {
      this.titles = ["Lorem", "Ipsum", "Dolor"];
    },
    setupCaptions() {
      this.captions = [
        "Very fancy description that doesn't hold a lot of context clues...",
        "Very fancy description that doesn't hold a lot of context clues1...",
        "Very fancyanother desciription2",
      ];
    },
    setupDates() {
      this.dates = ["June 16, 2021", "June 17, 2022", "June 18, 2022"];
    },
  },
  mounted: function () {
    this.setupCaptions();
    this.setupDates();
    this.setupTitles();
  },
};
