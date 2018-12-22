<template>
  <div id="app">
    <compHeader/>
    <div v-if="$route.name !== 'welcome' && isAuth">sidebar</div>
    <router-view/>
    <footer class="footer">Copyrights 2018 | Make my mind Sp z o.o.</footer>
  </div>
</template>

<style lang="scss" src="@/assets/main.scss">
</style>

<script>
import compHeader from '@/components/UI/Header.vue'
export default {
  components: {
    compHeader
  },
  computed: {
    isAuth () {
      return this.$store.getters['userAuth/isAuth']
    }
  },
  created () {
    this.$store.dispatch('userAuth/tryAutoLogin')
  }
}
</script>
