export default {
  methods: {
    convertApiStringDate(stringDate) {
      return this.$moment(stringDate)
    }
  }
}
