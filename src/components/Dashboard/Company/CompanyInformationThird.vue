<template>
<div>
  <compAccordion :active="active">
    <div class="editInfo-head" slot="titleAcc" @click="collapse">
      <circle-progress :percentage="100" :number="3" :dotx="5" :doty="4" />
      <div class="editInfo-head--titles">
        <h2>Etap 3. – Szczegółowe informacje – IT</h2>
        <h4>Dzięki tym informacjom dopasujemy idealnych kandydatów!</h4>
      </div>
    </div>
    <div slot="contentAcc" class="editInfo__content">
      <div class="editInfo__content-it">
        <div class="editInfo__content-it_column">
          <label for="technology_stack">Stack technology</label>
          <multiselect id="technology_stack" v-model="formData.technology_stack" tag-placeholder="Add this as new tag" placeholder="Search or add a technology" label="label" track-by="value" :options="options.technology_stack" :multiple="true" :taggable="true" open-direction="bottom" style="margin-bottom:10rem"></multiselect>
          <label for="technology_stack">Version control systems</label>
          <multiselect id="technology_stack" v-model="formData.version_control_systems" tag-placeholder="Add this as new tag" placeholder="Search or add a technology" label="label" track-by="value" :options="options.version_control_systems" :multiple="true" :taggable="true" open-direction="bottom" style="margin-bottom:10rem"></multiselect>
          <div class="editInfo__content-it__row-toggle">
            <span class="editInfo__content-dark-text">
              Zespol QA w firmie</span>
            <div class="toggle">
              <label class="switch">
                <input type="checkbox" v-model="formData.qa_team">
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <div class="editInfo__content-it__row-toggle">
            <span class="editInfo__content-dark-text">
              Zespoly interdyspclinaasdasd</span>
            <div class="toggle">
              <label class="switch">
                <input type="checkbox" v-model="formData.interdisciplinary_teams">
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <div class="editInfo__content-it__row-toggle">
            <span class="editInfo__content-dark-text">
              Mozliwosc zmiany projektu w obrebie firmy</span>
            <div class="toggle">
              <label class="switch">
                <input type="checkbox" v-model="formData.change_project">
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <div class="editInfo__content-it__row-toggle">
            <span class="editInfo__content-dark-text">
              Okresowa Evaoulacja</span>
            <div class="toggle">
              <label class="switch">
                <input type="checkbox" v-model="formData.periodic_evaluation">
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <div class="editInfo__content-it__row-toggle">
            <span class="editInfo__content-dark-text">
              Mozliwosc wbory narzedzi pracy</span>
            <div class="toggle">
              <label class="switch">
                <input type="checkbox" v-model="formData.choose_work_tools">
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="editInfo__content-it_column">
          <label for="technology_stack">Metodyki Zarzadzanie</label>
          <multiselect id="technology_stack" v-model="formData.methodologies" tag-placeholder="Add this as new tag" placeholder="Search or add a technology" label="label" track-by="value" :options="options.methodologies" :multiple="true" :taggable="true" open-direction="bottom" style="margin-bottom:10rem"></multiselect>
          <label for="technology_stack">Specjalizacja/Branza</label>
          <multiselect v-model="formData.specialization" :options="options.specialization" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Wybierz z listy" label="label" track-by="value" :preselect-first="false" open-direction="bottom" :show-labels="false">
            <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
          </multiselect>
        </div>
      </div>

    </div>
  </compAccordion>
</div>
</template>

<script>
import CircleProgress from '@/components/UI/circleprogress.vue'
import compAccordion from '@/components/UI/accordion.vue'
import Multiselect from 'vue-multiselect'
export default {
  props: ['active', 'formData', 'options', 'handle'],
  methods: {
    collapse: function () {
      this.handle('third')
    },
    getMultiLabel (label) {
      const getvalues = this.formData[label]
      const options = this.options[label]
      const filteredArray = options.filter(function (itm) {
        return getvalues.indexOf(itm.value) > -1
      })
      this.formData[label] = filteredArray
    },
    atCreatedLabels () {
      if (this.formData.benefits === undefined) {
        setTimeout(() => {
          this.getMultiLabel('technology_stack')
          this.getMultiLabel('methodologies')
          this.getMultiLabel('version_control_systems')
          this.getMultiLabel('specialization')
        }, 500)
      } else {
        this.getMultiLabel('technology_stack')
        this.getMultiLabel('methodologies')
        this.getMultiLabel('version_control_systems')
        this.getMultiLabel('specialization')
      }
    },
    makeArr (label) {
      const arr = this.formData[label].map(function (el) {
        return el.value
      })
      return arr
    }
  },
  created () {
    this.atCreatedLabels()
  },
  components: {
    CircleProgress,
    compAccordion,
    Multiselect
  }
}
</script>
