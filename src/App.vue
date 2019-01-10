<template>
  <div id="app" class="container">
    <compSidebar v-if="$route.name !== 'welcome' && isAuth"/>
    <compHeader :class="{'onSidebar': $route.name !== 'welcome' && isAuth}"/>
    <router-view/>
    <footer class="footer">Copyrights 2018 | Make my mind Sp z o.o.</footer>
  </div>
</template>

<script>
import compHeader from '@/components/UI/Header.vue'
import compSidebar from '@/components/UI/Sidebar.vue'

export default {
  components: {
    compHeader,
    compSidebar
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

<style lang="scss" src="@/assets/main.scss">
</style>
