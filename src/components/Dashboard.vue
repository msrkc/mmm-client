<template>
<div>
  <div style="position:absolute;top:20%;left:7%;font-size:1.2rem">
    <router-link to="/welcome">welcome page</router-link> <br>
    <router-link to="/dashboard/information">company information edit page</router-link>
  </div>

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
