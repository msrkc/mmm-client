<template>
  <div style="text-align:center;font-size:16px;">
    <br>
    home component
    <br><br>
    <h3>dashboard</h3> <h2>{{ email }}</h2> (this is a temporary state)
    <br><br><br>
    Works with this chrome extension<br>
    <a href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi" target="_blank" rel="noopener noreferrer">Allow-Control-Allow-Origin: *</a>
    <br><br>
    <pre>
      todos:
      [x] dashboard route guard
      [x] login register requests
      [x] set/remove token to/from Localstorage
      [x] logout
      [x] validation

    </pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['email'])
  }
}
</script>
