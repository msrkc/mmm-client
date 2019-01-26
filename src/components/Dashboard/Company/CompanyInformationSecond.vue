<template>
  <div>
    <compAccordion :active="active">
      <div class="editInfo-head" slot="titleAcc" @click="collapse">
        <circle-progress :percentage="50" :number="2" :dotx="2" :doty="10" />
        <div class="editInfo-head--titles">
          <h2>Etap 2. – Szczegółowe informacje o twojej organizacji</h2>
          <h4>Dzięki tym informacjom dopasujemy idealnych kandydatów!</h4>
        </div>
      </div>
      <div slot="contentAcc" class="editInfo__content">
        <div class="editInfo__content-firma">
          <div class="editInfo__content-firma_column" style="display:flex;flex-flow:column;">
            <label for="opis">Opis firma</label>
            <textarea name="" id="opis" cols="30" rows="10"></textarea>

            <label for="konk">Czym firma wroznia na konkurencji</label>
            <textarea id="konk" cols="30" rows="10"></textarea>

            <label for="wartosci">Wartosci firma</label>
            <div style="width:24rem;display:inline-flex;margin-bottom:1.5rem;">
              <multiselect v-model="formData.country" :options="options.country" open-direction="bottom" :show-labels="false" placeholder="Wybierz z listy">
                <template slot="option" slot-scope="props">
                  {{props.option.label}}
                </template>
              </multiselect>
            </div>
            <label>Typ kultry organizecjynej</label>
            <label>Swiadaczenia pozaplacowe</label>
            <div style="width:24rem;display:inline-flex;margin-bottom:1.5rem;">
              <multiselect :value="custom" v-model="formData.benefits" :options="options.benefits" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Wybierz z listy" label="value" track-by="value" :preselect-first="true" open-direction="top" :show-labels="false">
                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
              </multiselect>
            </div>
          </div>
          <div class="editInfo__content-firma_column" style="display:flex;flex-flow:column;">
            <label for="">Oferowane formy wspolpracy</label>
            <div class="radios">
              <div class="radio" v-for="(coorp, index) in options.forms_of_cooperation" :key="index">
                <input :id="coorp.value" type="checkbox" :value="coorp.value" v-model="formData.forms_of_cooperation" />
                <label :for="coorp.value">{{coorp.label}}</label>
              </div>
            </div>
            <div class="toggle-input">
              <div class="toggle-input-column">
                <label for="urlop_b2b">Urlop B2B</label>
                <input id="urlop_b2b" type="number" class="normal" placeholder="Ilosc dni" style="width:15rem;margin-top:1rem">
              </div>
              <div class="toggle-input-column">
                <label>Platny/Bezplatny</label>
                <div class="toggle">
                  <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
            <div class="toggle-input">
              <div class="toggle-input-column">
                <label for="chrobowe_b2b">Chrobowe B2B</label>
                <input type="number" id="chrobowe_b2b" class="normal" placeholder="Ilosc dni" style="width:15rem;margin-top:1rem">
              </div>
              <div class="toggle-input-column">
                <label>Platny/Bezplatny</label>
                <div class="toggle">
                  <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div class="editInfo__content-firma_social">
                <label>Linki do social media</label>
                <div class="social-input">
                  <img src="@/assets/img/form/cominfo/facebook.svg"><input class="normal" type="text" id="facebook" v-model="formData.facebook_url">
                </div>
                <div class="social-input">
                  <img src="@/assets/img/form/cominfo/instagram.svg"> <input class="normal" type="text" id="instagram" v-model="formData.instagram_url">
                </div>
                <div class="social-input">
                  <img src="@/assets/img/form/cominfo/linkedin.svg"><input class="normal" type="text" id="linkedin" v-model="formData.linkedin_url">
                </div>
                <div class="social-input">
                  <img src="@/assets/img/form/cominfo/twitter.svg"><input class="normal" type="text" id="twitter" v-model="formData.twitter_url">
                </div>
                {{formData.benefits}}
              </div>
            </div>
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
  data () {
    return {
      wait: 300
    }
  },
  computed: {

  },
  methods: {
    collapse: function () {
      this.handle('second')
    },
    custom () {
      const getvalues = this.formData.benefits
      const options = this.options.benefits
      const filteredArray = options.filter(function (itm) {
        return getvalues.indexOf(itm.value) > -1
      })
      this.formData.benefits = filteredArray
    }
  },
  mounted () {
    this.custom()
  },
  components: {
    CircleProgress,
    compAccordion,
    Multiselect
  }
}

</script>
