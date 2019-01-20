<template>
<div class="accordion">
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

<style lang="scss">
.accordion {
    .message {
      max-width: 100%;
      margin-left: auto;
      margin-right: auto;
      background: white;
      margin: 1rem 0;
      box-shadow: 1px 2px 7px 2px rgba(209, 211, 235, .5);
    }

    .message-header {
      cursor: pointer;
      border-bottom: 2px solid #F5F5F5;
      padding: .5rem;
    }

    .message-body {
      padding: 0;
      max-height: auto;
      overflow: hidden;
      transition: 0.3s ease all;
    }

    .is-closed .message-body {
      max-height: 0;
    }

    .message-content {
      padding: 0;
    }
  }
</style>
