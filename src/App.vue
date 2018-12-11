<template>
  <div id="app">
    <compHeader/>
    <router-view/>
    <footer class="footer">Copyrights 2018 | Make my mind Sp z o.o.</footer>
  </div>
</template>

<style lang="scss" src="@/assets/main.scss">
</style>

<script>
import compHeader from '@/components/Header.vue'
export default {
  components: {
    compHeader
  }
}
</script>
