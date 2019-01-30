export const clientMixin = {
  props: ['active', 'formData', 'options', 'handle'],
  methods: {
    collapse (x) {
      this.handle(x)
    },
    getSingleLabel (label) {
      const value = this.formData[label]
      const options = this.options[label]
      const filtered = options.find(x => x.value === value)
      this.formData[label] = filtered
    },
    getMultiLabel (label) {
      const getvalues = this.formData[label]
      const options = this.options[label]
      const filteredArray = options.filter(function (itm) {
        return getvalues.indexOf(itm.value) > -1
      })
      this.formData[label] = filteredArray
    },
    makeArr (label) {
      const arr = this.formData[label].map(function (el) {
        return el.value
      })
      return arr
    }
  }
}
