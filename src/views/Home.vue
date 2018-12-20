<template>
<div style="text-align:center;font-size:16px;margin:50px 0;">
  <div v-if="page === 'form'">
    <label for="name">nazwa firma</label>
    <input type="text" id="name" v-model="edit.name"> <br>
      ilu pracownikow zatrudnia twoje firma<br>
    <label for="compsizeten">
        <input type="radio" id="compsizeten" v-model="edit.compSize" value="10">
      10</label>
    <label for="compsizefifty">
      <input type="radio" id="compsizefifty" v-model="edit.compSize" value="10-50">
      10-50</label><br>
      ilu pracownikow planujesz <br>
    <label for="compplan10">
        <input type="radio" id="compplan10" v-model="edit.compPlan" value="10">
      10</label>
    <label for="compplan50">
      <input type="radio" id="compplan50" v-model="edit.compPlan" value="10-50">
      10-50</label><br><br>
      <hr>
      <button @click="send()">send</button>
  </div>
  <div v-else-if="page === 'result'">
    {{edit}}<br><br>
    <a href="" @click.prevent="page = 'form'">back</a>
  </div>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  data () {
    return {
      page: 'form',
      edit: {
        name: '',
        compSize: '',
        compPlan: ''

      }
    }
  },
  computed: {
    ...mapGetters(['email'])
  },
  methods: {
    send () {
      this.page = 'result'
    }
  }
}
</script>
