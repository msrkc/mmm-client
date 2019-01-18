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
    <div slot="contentAcc" class="editInfo-head--content">
      <div style="width:50rem;">
        <multiselect v-model="selected" :options="options"></multiselect>
        <br><br>
        <multiselect v-model='valueMulti' tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="optionsMulti" :multiple="true" :taggable="true" @tag="addTag" open-direction="bottom"></multiselect>

      </div>

      <br><br><br><br><br><br><br>
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
    <div slot="contentAcc" class="editInfo-head--content">
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
    <div slot="contentAcc" class="editInfo-head--content">
      Third ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptate tenetur, vel laborum explicabo ea adipisci officia laboriosam officiis sequi accusantium nisi earum dolor ratione? Earum velit repellendus necessitatibus asperiores.
    </div>
  </compAccordion>
</div>
</template>

<script>
import CircleProgress from '@/components/UI/circleprogress.vue'
import compAccordion from '@/components/UI/accordion.vue'
import Multiselect from 'vue-multiselect'
export default {
  data () {
    return {
      selected: null,
      options: ['list', 'of', 'options'],
      valueMulti: [{
        name: 'Javascript',
        code: 'js'
      }],
      optionsMulti: [{
        name: 'Vue.js',
        code: 'vu'
      },
      {
        name: 'Javascript',
        code: 'js'
      },
      {
        name: 'Open Source',
        code: 'os'
      }
      ],
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
    },
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.optionsMulti.push(tag)
      this.valueMulti.push(tag)
    }
  },
  components: {
    CircleProgress,
    compAccordion,
    Multiselect
  }
}
</script>
