<template>
<div class="dashboard">
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
    this.$store.dispatch('clientInfo/getClient')
  }
}
</script>

<style>

</style>
