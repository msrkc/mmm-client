<template>
  <div style="margin:10rem 0;">
    <h1>home dashboard</h1>
    <pre style="font-size:1.3rem; text-align:left;">{{client}}</pre>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  computed: {
    client () {
      return this.$store.getters['clientInfo/client'];
    }
  }
};
</script>

<style>
</style>
