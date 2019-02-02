<script>
import { clientMixin } from './_mixin.js'
import CircleProgress from '@/components/UI/circleprogress.vue'
import compAccordion from '@/components/UI/accordion.vue'
import Multiselect from 'vue-multiselect'
export default {
  mixins: [clientMixin],
  data () {
    return {
      paidHoliday: false,
      sickLeave: false
    }
  },
  methods: {
    toggleHoliday () {
      this.paidHoliday = !this.paidHoliday
    },
    toggleSickLeave () {
      this.sickLeave = !this.sickLeave
    },
    onSubmit () {
      let formData = {
        'company_values': this.makeArr('company_values'),
        'benefits': this.makeArr('benefits'),
        'description': this.formData.description,
        'uniqueness_on_market': this.formData.uniqueness_on_market,
        'forms_of_cooperation': this.formData.forms_of_cooperation,
        'paid_b2b_holidays': this.formData.paid_b2b_holidays,
        'holidays': this.formData.holidays,
        'sick_leave': this.formData.sick_leave,
        'paid_b2b_sick_leave': this.formData.paid_b2b_sick_leave,
        'facebook_url': this.formData.facebook_url,
        'instagram_url': this.formData.instagram_url,
        'linkedin_url': this.formData.linkedin_url,
        'twitter_url': this.formData.twitter_url
      }
      this.$store.dispatch('clientInfo/infoPatch', formData)
        .then(() => {
          setTimeout(() => {
            this.$emit('collapseParent', 'third')
          }, 500)
        })
    },
    atCreatedLabels () {
      if (this.formData.benefits === undefined) {
        setTimeout(() => {
          this.getMultiLabel('benefits')
          this.getMultiLabel('company_values')
        }, 500)
      } else {
        this.getMultiLabel('benefits')
        this.getMultiLabel('company_values')
      }
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

<template>
  <div>
    <compAccordion :active="active">
      <div class="editInfo-head" slot="titleAcc" @click="collapse('second')">
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
            <textarea name="" v-model="formData.description" id="opis" cols="30" rows="10"></textarea>

            <label for="konk">Czym firma wroznia na konkurencji</label>
            <textarea v-model="formData.uniqueness_on_market" id="konk" cols="30" rows="10"></textarea>

            <label for="wartosci">Wartosci firma</label>
            <div style="width:24rem;display:inline-flex;margin-bottom:1.5rem;">
             <multiselect :value="formData.company_values" v-model="formData.company_values" :options="options.company_values" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Wybierz z listy" label="label" track-by="value" :preselect-first="false" open-direction="top" :show-labels="false">
                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
              </multiselect>
            </div>
            <label>Typ kultry organizecjynej</label>
            <label>Swiadaczenia pozaplacowe</label>
            <div style="width:24rem;display:inline-flex;margin-bottom:1.5rem;">
              <multiselect v-model="formData.benefits" :options="options.benefits" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Wybierz z listy" label="label" track-by="value" :preselect-first="false" open-direction="top" :show-labels="false">
                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
              </multiselect>
            </div>
          </div>
          <div class="editInfo__content-firma_column" style="display:flex;flex-flow:column;">
            <label>Oferowane formy wspolpracy</label>
            <div class="radios">
              <div class="radio" v-for="(coorp, index) in options.forms_of_cooperation" :key="index">
                <input :id="coorp.value" type="checkbox" :value="coorp.value" v-model="formData.forms_of_cooperation" />
                <label :for="coorp.value">{{coorp.label}}</label>
              </div>
            </div>
            <div class="toggle-input">
              <div class="toggle-input-column">
                <label for="urlop_b2b">Urlop B2B</label>
                <input v-if="paidHoliday" v-model="formData.holidays" id="urlop_b2b" type="number" class="normal" placeholder="Ilosc dni"  style="width:15rem;margin-top:1rem">
                <input v-if="!paidHoliday" id="urlop_b2b" v-model="formData.paid_b2b_holidays" type="number" class="normal" placeholder="Ilosc dni" style="width:15rem;margin-top:1rem">
              </div>
              <div class="toggle-input-column">
                <label>Platny/Bezplatny</label>
                <div class="toggle">
                  <label class="switch">
                    <input type="checkbox" @click="toggleHoliday">
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
            <div class="toggle-input">
              <div class="toggle-input-column">
                <label for="chrobowe_b2b">Chrobowe B2B</label>
                <input v-if="sickLeave" v-model="formData.sick_leave" type="number" id="chrobowe_b2b" class="normal" placeholder="Ilosc dni" style="width:15rem;margin-top:1rem">
                <input v-if="!sickLeave" v-model="formData.paid_b2b_sick_leave" type="number" id="chrobowe_b2b" class="normal" placeholder="Ilosc dni" style="width:15rem;margin-top:1rem">
              </div>
              <div class="toggle-input-column">
                <label>Platny/Bezplatny</label>
                <div class="toggle">
                  <label class="switch">
                    <input type="checkbox" @click="toggleSickLeave">
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div class="editInfo__content-firma_social">
                <label>Linki do social media</label>
                <div class="social-input">
                  <img src="@/assets/img/form/cominfo/facebook.svg"><input class="normal" type="text" id="facebook" v-model="formData.facebook_url" placeholder="link">
                </div>
                <div class="social-input">
                  <img src="@/assets/img/form/cominfo/instagram.svg"> <input class="normal" type="text" id="instagram" v-model="formData.instagram_url" placeholder="link">
                </div>
                <div class="social-input">
                  <img src="@/assets/img/form/cominfo/linkedin.svg"><input class="normal" type="text" id="linkedin" v-model="formData.linkedin_url" placeholder="link">
                </div>
                <div class="social-input">
                  <img src="@/assets/img/form/cominfo/twitter.svg"><input class="normal" type="text" id="twitter" v-model="formData.twitter_url" placeholder="link">
                </div>
              </div>
            </div>
          </div>
        </div>
        <button  @click="onSubmit" class="editInfo-btn">Zapisz</button>
      </div>
    </compAccordion>
  </div>
</template>
