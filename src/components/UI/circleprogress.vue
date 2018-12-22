<template>
<div>
  <svg class="stat-circle" width="90" viewBox="0 0 20 20">
        <circle class="bg" cx="10" cy="10" r="8"></circle>
        <circle class="progress" cx="10" cy="10" r="8" :style="{'stroke-dashoffset':calc}"></circle>
        <circle class="dot" :cx="dotx" :cy="doty" r="1"></circle>
        <text x="50%" y="55%">{{number}}</text>
      </svg>
</div>
</template>

<script>
export default {
  props: ['percentage', 'number', 'dotx', 'doty'],
  computed: {
    calc () {
      const calc = -51 - (51 / 100) * this.percentage
      return calc
    }
  }
}
</script>

<style lang="scss" scoped>
.stat-circle
{
  circle.bg
  {
    fill: none;
    stroke: #f1f1f1;
    stroke-width: 0.2;
  }
  circle.progress
  {
    fill: none;
    stroke: #FFCB4A;
    stroke-width: 0.8;
    stroke-dasharray: 51 51;
    stroke-dashoffset: -51;
    stroke-linecap: round;
  }
  circle.dot{
    fill: #FFCB4A;
  }
  text
  {
    font-size: 4px;
    text-anchor: middle;
    fill: #999999;
    font-family: Arial
  }
}
</style>
