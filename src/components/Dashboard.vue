<template>
  <div class="dashboard">
    <router-view v-if="isAuth"></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    isAuth () {
      return this.$store.getters['userAuth/isAuth']
    },
    client () {
      return this.$store.getters['clientInfo/client']
    }
  },
  watch: {
    client (newCount, oldCount) {
      if (!newCount.identifier) {
        this.$router.push({ name: 'welcome' })
      }
    }
  },
  created () {
    Promise.all([
      this.$store.dispatch('clientInfo/getClient'),
      this.$store.dispatch('clientInfo/getValues')
    ])
  }
}
</script>

<style>
</style>
