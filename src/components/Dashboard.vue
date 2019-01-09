<template>
<div>
  dashboard
<router-view v-if="isAuth"></router-view>
</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    isAuth () {
      return this.$store.getters['userAuth/isAuth']
    }
  },
  created () {
    this.$store.dispatch('userAuth/getClient')
  }
}
</script>

<style>

</style>
