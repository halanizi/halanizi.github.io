export default {
  props: {
    Title: String,
    Caption: String,
    Date: String,
  },
  methods: {
    getTitle() {
      return this.Title;
    },
    getDescription() {
      return this.Caption;
    },
    getDate() {
      return this.Date;
    },
  },
};
