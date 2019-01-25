export const stockPercentMixin = {
  methods: {
    stockPercent(number) {
      return number > 0 ? `+${number}` : number
    }
  }
}
