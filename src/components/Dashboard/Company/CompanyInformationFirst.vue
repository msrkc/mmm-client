<script>
import CircleProgress from '@/components/UI/circleprogress.vue'
import compAccordion from '@/components/UI/accordion.vue'
import Multiselect from 'vue-multiselect'
export default {
  props: ['active', 'formData', 'options', 'handle'],
  computed: {

  },
  data () {
    return {
      wait: 500
    }
  },
  methods: {
    collapse: function () {
      this.handle('first')
    },
    legalFormLabel (option) {
      setTimeout(() => {
        if (option.length >= 0) {
          const value = this.formData.legal_form
          const options = this.options.legal_form
          const label = options.find(x => x.value === value)
          this.formData.legal_form = label
        }
      }, this.wait)
      return `${option.label}`
    },
    countryFormLabel (option) {
      setTimeout(() => {
        if (option.length >= 0) {
          const value = this.formData.country
          const options = this.options.country
          const label = options.find(x => x.value === value)
          this.formData.country = label
        }
      }, this.wait)
      return `${option.label}`
    }
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
      <div class="editInfo-head" slot="titleAcc" @click="collapse">
        <circle-progress :percentage="0" :number="1" :dotx="5" :doty="4" />
        <div class="editInfo-head--titles">
          <h2>Etap 1. – Podstawowe informacje formalne</h2>
          <h4>Dzięki tym informacjom dopasujemy idealnych kandydatów!</h4>
        </div>
      </div>
      <div slot="contentAcc" class="editInfo__content">
        <div class="editInfo__content-basic_info">
          <div class="editInfo__content-basic_info__column">
            <div class="editInfo__content-form_label">
              <label for="company_name" class="left">Nazwa Firmy</label>
              <input class="normal" type="text" id="company_name" placeholder="Wpisz nazwe firma" v-model="formData.company_name">
            </div>
            <div class="editInfo__content-form_label">
              <label for="legal_form" class="left">Forma Prawna</label>
              <!-- <input class="normal" type="text" id="legal_form" placeholder="Wpisz nazwe firma" v-model="formData.legal_form"> -->
              <div style="width:20rem;display:inline-flex;margin-bottom:1.5rem;">
                <multiselect :custom-label="legalFormLabel" v-model="formData.legal_form" :options="options.legal_form" open-direction="bottom" :show-labels="false" placeholder="Wybierz z listy">
                   <template slot="singleLabel" slot-scope="props">{{props.option.label}}</template>
                  <template slot="option" slot-scope="props">
                    {{props.option.label}}
                  </template>
                </multiselect>
              </div>

            </div>
            <div class="editInfo__content-form_label">
              <label for="address" class="left">Adres</label>
              <input class="normal" type="text" id="address" placeholder="Wpisz address" v-model="formData.address">
            </div>
            <div class="editInfo__content-form_label">
              <label for="city" class="left">Miasto</label>
              <input class="normal" type="text" id="city" placeholder="Wpisz miasto" v-model="formData.city">
            </div>
          </div>

          <div class="editInfo__content-basic_info__column">
            <div class="editInfo__content-form_label">
              <label for="capital_group_name">Nazwa grupy kapitałowej</label>
              <input class="normal" type="text" id="capital_group_name" placeholder="Wpisz " v-model="formData.capital_group_name">
            </div>
            <div class="editInfo__content-form_label">
              <label for="date_of_creation" class="right">Rok powstania</label>
              <input class="normal" type="number" id="capital_group_name" placeholder="RRRR" v-model="formData.date_of_creation" style="width:12rem">
            </div>
            <div class="editInfo__content-form_label">
              <label for="country" class="right">Kraj</label>
              <div style="width:24rem;display:inline-flex;margin-bottom:1.5rem;">
                <multiselect :custom-label="countryFormLabel" v-model="formData.country" :options="options.country" open-direction="bottom" :show-labels="false" placeholder="Wybierz z listy">
                  <template slot="singleLabel" slot-scope="props">{{props.option.label}}</template>
                  <template slot="option" slot-scope="props">
                    {{props.option.label}}
                  </template>
                </multiselect>
              </div>
            </div>
            <div class="editInfo__content-form_label">
              <label for="postal_code" class="right">Kod pocztowy</label>
              <input class="normal" type="text" id="postal_code" placeholder="Wpisz" v-model="formData.postal_code">
            </div>
          </div>
        </div>
        <div class="editInfo__content-person">
          <span class="editInfo__content-dark-text">
            Z kim kontaktowac sie w sprawie rozliczen?</span>
          <input class="normal" type="text" id="payment_contact_name" placeholder="Imie i nazwisko" v-model="formData.payment_contact_name">
          <div class="editInfo__content-person_column">
            <input class="normal" type="text" id="payment_contact_email" placeholder="Adres e-mail" v-model="formData.payment_contact_email">
            <input class="normal" type="text" id="payment_contact_phone_number" placeholder="Nr telefonu" v-model="formData.payment_contact_phone_number">
          </div>
          <span class="editInfo__content-dark-text">
            Z kim kontaktowac sie w sprawie wspolpracy?</span>
          <div class="editInfo__content-person_column">
            <input class="normal" type="text" id="cooperation_contact_name" placeholder="Imie i Nazwisko" v-model="formData.cooperation_contact_name">
            <input class="normal" type="text" id="cooperation_contact_position" placeholder="Stanowisko" v-model="formData.cooperation_contact_position">
          </div>
          <div class="editInfo__content-person_column">
            <input class="normal" type="text" id="cooperation_contact_email" placeholder="Adres e-mail" v-model="formData.cooperation_contact_email">
            <input class="normal" type="text" id="cooperation_contact_phone_number" placeholder="Nr telefonu" v-model="formData.cooperation_contact_phone_number">
          </div>
          <div class="editInfo__content-forma-kontaktu">
            <span class="editInfo__content-dark-text">
              Preferowana forma kontaktu</span>
            <div class="radio" v-for="(contact, index) in options.contact_preference" :key="index">
              <input :id="contact.value" type="checkbox" :value="contact.value" v-model="formData.contact_preference" />
              <label :for="contact.value">{{contact.label}}</label>
            </div>
          </div>
        </div>
        <div class="editInfo__content-hr">
          <div class="editInfo__content-hr_column_toggle">
            <span class="editInfo__content-dark-text">
              Dzial HR</span>
            <div class="toggle">
              <label class="switch">
                <input type="checkbox" v-model="formData.hr_department">
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <div class="editInfo__content-hr_column_radio">
            <span class="editInfo__content-dark-text">
              Wybierz produkty ktora moga byc interesujace dla ciebie w przyslosci </span>
            <div class="radios">
              <div class="radio" v-for="(interest, index) in options.interest_in_products" :key="index">
                <input :id="interest.value" type="checkbox" v-model="formData.interest_in_products" :value="interest.value" />
                <label :for="interest.value">{{interest.value}}</label>
              </div>
            </div>

          </div>
        </div>
        <button @click.prevent="handle('second')" style="align-self:flex-end;justify-self:flex-end;">next step</button>
      </div>
    </compAccordion>
</div>
</template>
