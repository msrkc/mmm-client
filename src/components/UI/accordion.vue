<template>
<div class="companyInfo__accordion">
  <div class="message" :class="accordionClasses">
    <div class="message-header">
      <slot name="titleAcc"></slot>
    </div>
    <div class="message-body">
      <div class="message-content">
        <slot name="contentAcc"></slot>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    active: {
      default: false
    }
  },
  data () {
    return {
      isOpen: this.active
    }
  },
  methods: {
    // toggleAccordion: function () {
    //   this.isOpen = !this.isOpen
    // }
  },
  computed: {
    accordionClasses: function () {
      return {
        'is-closed': !this.isOpen,
        'is-primary': this.isOpen,
        'is-dark': !this.isOpen
      }
    }
  },
  watch: {
    active: function (newVal, oldVal) { // watch it
      // console.log('Prop changed: ', newVal, ' | was: ', oldVal)
      this.isOpen = newVal
    }
  }
}
</script>
