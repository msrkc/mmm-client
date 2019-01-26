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
        <div style="display:flex;flex-flow:column;height:20rem">
          <multiselect v-model="valueMultiChild" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="label" track-by="value" :options="options" :multiple="true" :taggable="true" open-direction="bottom"></multiselect>

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
  props: ['active', 'formData', 'options', 'handle', 'valueMulti'],
  data () {
    return {
      valueMultiChild: this.valueMulti
    }
  },
  methods: {
    collapse: function () {
      this.handle('third')
    }
  },
  components: {
    CircleProgress,
    compAccordion,
    Multiselect
  }
}
</script>
