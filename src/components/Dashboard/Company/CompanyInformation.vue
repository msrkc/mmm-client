<template>
<div class="companyInfo">
  company information edit

  <compAccordion :active="acc.first">
    <div class="editInfo-head" slot="titleAcc" @click="handle('first')">
      <circle-progress :percentage="0" :number="1" :dotx="5" :doty="4" />
      <div class="editInfo-head--titles">
        <h2>Etap 1. – Podstawowe informacje formalne</h2>
        <h4>Dzięki tym informacjom dopasujemy idealnych kandydatów!</h4>
      </div>
    </div>
    <div slot="contentAcc">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptate tenetur, vel laborum explicabo ea adipisci officia laboriosam officiis sequi accusantium nisi earum dolor ratione? Earum velit repellendus necessitatibus asperiores.
      <br>
      <button @click.prevent="handle('second')">next step</button>
    </div>
  </compAccordion>
  <compAccordion :active="acc.second">
    <div class="editInfo-head" slot="titleAcc" @click="handle('second')">
      <circle-progress :percentage="50" :number="2" :dotx="2" :doty="10" />
      <div class="editInfo-head--titles">
        <h2>Etap 2. – Szczegółowe informacje o twojej organizacji</h2>
        <h4>Dzięki tym informacjom dopasujemy idealnych kandydatów!</h4>
      </div>
    </div>
    <div slot="contentAcc">
      Second ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptate tenetur, vel laborum explicabo ea adipisci officia laboriosam officiis sequi accusantium nisi earum dolor ratione? Earum velit repellendus necessitatibus asperiores.
    </div>
  </compAccordion>
  <compAccordion :active="acc.third">
    <div class="editInfo-head" slot="titleAcc" @click="handle('third')">
      <circle-progress :percentage="100" :number="3" :dotx="5" :doty="4" />
      <div class="editInfo-head--titles">
        <h2>Etap 3. – Szczegółowe informacje – IT</h2>
        <h4>Dzięki tym informacjom dopasujemy idealnych kandydatów!</h4>
      </div>
    </div>
    <div slot="contentAcc">
      Third ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptate tenetur, vel laborum explicabo ea adipisci officia laboriosam officiis sequi accusantium nisi earum dolor ratione? Earum velit repellendus necessitatibus asperiores.
    </div>
  </compAccordion>
</div>
</template>

<script>
import CircleProgress from '@/components/UI/circleprogress.vue'
import compAccordion from '@/components/UI/accordion.vue'
export default {
  data () {
    return {
      acc: {
        first: true,
        second: false,
        third: false
      }
    }
  },
  methods: {
    handle (item) {
      if (item === 'first') {
        this.acc.first = !this.acc.first
        this.acc.second = this.acc.third = false
      }
      if (item === 'second') {
        this.acc.second = !this.acc.second
        this.acc.first = this.acc.third = false
      }
      if (item === 'third') {
        this.acc.third = !this.acc.third
        this.acc.first = this.acc.second = false
      }
    }
  },
  components: {
    CircleProgress,
    compAccordion
  }
}
</script>
