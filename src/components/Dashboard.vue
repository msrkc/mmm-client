<template>
<div style="font-size:1.5rem; margin:0 auto; width:400px;">
  <a href="/welcome" rel="noopener noreferrer">welcome page</a>
  <pre>
{{client}}
  </pre>

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
    },
    client () {
      return this.$store.getters['clientInfo/client']
    }
  },
  created () {
    this.$store.dispatch('clientInfo/getClient')
  }
}
</script>

<style>

</style>
