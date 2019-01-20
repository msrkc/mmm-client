<template>
  <div class="companyInfo">
    <compAccordion :active="acc.first">
      <div class="editInfo-head" slot="titleAcc" @click="handle('first')">
        <circle-progress :percentage="0" :number="1" :dotx="5" :doty="4" />
        <div class="editInfo-head--titles">
          <h2>Etap 1. – Podstawowe informacje formalne</h2>
          <h4>Dzięki tym informacjom dopasujemy idealnych kandydatów!</h4>
        </div>
      </div>
      <div slot="contentAcc" class="editInfo__content">
        <div class="editInfo__content-basic_info">
          <div class="editInfo__content-basic_info__column">
            <div class=".editInfo__content-form_label">
              <label for="company_name" class="left">Nazwa Firmy</label>
              <input class="normal" type="text" id="company_name" placeholder="Wpisz nazwe firma" v-model="formData.company_name">
            </div>
            <div class=".editInfo__content-form_label">
              <label for="legal_form" class="left">Forma Prawna</label>
              <input class="normal" type="text" id="legal_form" placeholder="Wpisz nazwe firma" v-model="formData.legal_form">
            </div>
            <div class=".editInfo__content-form_label">
              <label for="address" class="left">Adres</label>
              <input class="normal" type="text" id="address" placeholder="Wpisz address" v-model="formData.address">
            </div>
            <div class=".editInfo__content-form_label">
              <label for="city" class="left">Miasto</label>
              <input class="normal" type="text" id="city" placeholder="Wpisz miasto" v-model="formData.city">
            </div>
          </div>

          <div class="editInfo__content-basic_info__column">
            <div class=".editInfo__content-form_label">
              <label for="capital_group_name">Nazwa grupy kapitałowej</label>
              <input class="normal" type="text" id="capital_group_name" placeholder="Wpisz " v-model="formData.capital_group_name" style="width:22rem">
            </div>
            <div class=".editInfo__content-form_label">
              <label for="date_of_creation" class="right">Rok powstania</label>
              <input class="normal" type="number" id="capital_group_name" placeholder="RRRR" v-model="formData.date_of_creation" style="width:12rem">
            </div>
            <div class=".editInfo__content-form_label">
              <label for="country" class="right">Kraj</label>
              <div style="width:26rem;display:inline-flex;margin-bottom:1.5rem;">
                <multiselect v-model="formData.country" :options="options.country" open-direction="bottom" :show-labels="false" placeholder="Wybierz z listy">
                  <template slot="option" slot-scope="props">
                    {{props.option[0]}}
                  </template>
                </multiselect>
              </div>
            </div>
            <div class=".editInfo__content-form_label">
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
            <div class="radio">
              <input id="telefon" type="checkbox" value="Telefon" v-model="formData.contact_preference" />
              <label for="telefon">Telefon</label>
            </div>
            <div class="radio">
              <input id="e-mail" type="checkbox" value="E-mail" v-model="formData.contact_preference" />
              <label for="e-mail">E-mail</label>
            </div>
            <div class="radio">
              <input id="sms" type="checkbox" value="SMS" v-model="formData.contact_preference" />
              <label for="sms">SMS</label>
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
            <div class="radio">
              <input id="employer_branding" type="checkbox" value="Employer Branding" v-model="formData.interest_in_products" />
              <label for="employer_branding">Employer Branding</label>
            </div>
            <div class="radio">
              <input id="audyt" type="checkbox"/>
              <label for="audyt">Audyt</label>
            </div>
            <div class="radio">
              <input id="szkolenia" type="checkbox"/>
              <label for="szkolenia">Szkolenia</label>
            </div>
            <div class="radio">
              <input id="rekrutacja" type="checkbox"/>
              <label for="rekrutacja">Rekrutacja</label>
            </div>
            <div class="radio">
              <input id="Badania" type="checkbox"/>
              <label for="Badania">Badania</label>
            </div>
            <div class="radio">
              <input id="escape" type="checkbox" v-model="formData.interest_in_products" value="Escape Center" />
              <label for="escape">Escape Center</label>
            </div>
          </div>

          </div>
        </div>
        <button @click.prevent="handle('second')" style="align-self:flex-end;justify-self:flex-end;">next step</button>
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
      <div slot="contentAcc" class="editInfo__content">
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
      <div slot="contentAcc" class="editInfo__content">

      </div>
    </compAccordion>
  </div>
</template>

<script>
import CircleProgress from '@/components/UI/circleprogress.vue'
import compAccordion from '@/components/UI/accordion.vue'
import Multiselect from 'vue-multiselect'
export default {
  computed: {
    formData: {
      get () {
        return this.$store.state.clientInfo.client
      },
      set (value) {
        this.$store.commit('clientInfo/setClient', value)
      }
    },
    values () {
      return this.$store.getters['clientInfo/values']
    }
  },
  data () {
    return {
      selected: null,
      options: {
        country: [],
        legal_form: []
      },
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
  watch: {
    values: function (newVal, oldVal) {
      this.options = newVal
    }
  },
  created () {
    this.$store.dispatch('clientInfo/getValues')
  },
  components: {
    CircleProgress,
    compAccordion,
    Multiselect
  }
}

</script>
