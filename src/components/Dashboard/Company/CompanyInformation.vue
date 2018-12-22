<template>
<div style="display:flex">
  company information edit
  <circle-progress :percentage="0" :number="1" :dotx="5" :doty="4" />
  <circle-progress :percentage="25" :number="2" :dotx="10" :doty="18" />
  <circle-progress :percentage="50" :number="3" :dotx="2" :doty="10" />
  <circle-progress :percentage="75" :number="4" :dotx="10" :doty="2" />
  <circle-progress :percentage="100" :number="5" :dotx="5" :doty="4" />

</div>
</template>

<script>
import CircleProgress from '@/components/UI/circleprogress.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    CircleProgress
  }
}
</script>

<style>

</style>
