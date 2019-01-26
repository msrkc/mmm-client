<script>
import CompanyInformationFirst from '@/components/Dashboard/Company/CompanyInformationFirst.vue'
import CompanyInformationSecond from '@/components/Dashboard/Company/CompanyInformationSecond.vue'
import CompanyInformationThird from '@/components/Dashboard/Company/CompanyInformationThird.vue'
export default {
  data () {
    return {
      valueMulti: [{
        label: 'Javascript',
        value: 'js'
      },
      {
        label: 'Open Source',
        value: 'os'
      }
      ],
      optionsMulti: [{
        label: 'Vue.js',
        value: 'vu'
      },
      {
        label: 'Javascript',
        value: 'js'
      },
      {
        label: 'Open Source',
        value: 'os'
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
      let accordions = this.acc
      Object.keys(accordions).forEach(function (key) {
        if (key === item) {
          accordions[key] = !accordions[key]
        } if (key !== item) {
          accordions[key] = false
        }
      })
    }
  },
  computed: {
    formData: {
      get () {
        return this.$store.state.clientInfo.client
      },
      set (value) {
        this.$store.commit('clientInfo/setClient', value)
      }
    },
    options () {
      return this.$store.getters['clientInfo/values']
    },
    progressBar () {
      const obj = this.$store.state.clientInfo.client
      const total = Object.keys(obj).length - 2
      let status = 0
      Object.keys(obj).slice(2, total).map((item) => {
        const entry = obj[item]
        if (entry !== null && entry !== '' && entry !== undefined && entry.length > 0 && entry !== []) {
          ++status
        }
        return status
      })
      return status * 100 / total
    }
  },
  destroyed () {
    this.$store.dispatch('clientInfo/getClient')
  },
  components: {
    CompanyInformationFirst,
    CompanyInformationSecond,
    CompanyInformationThird
  }
}

</script>

<template>
  <div class="companyInfo">
    <div style="height:5px;background:orange" :style="{width: progressBar + '%'}"></div>
    <companyInformationFirst :active="acc.first" :formData="formData" :options="options" :handle="handle"></companyInformationFirst>
    <companyInformationSecond :active="acc.second" :formData="formData" :options="options" :handle="handle"></companyInformationSecond>
    <companyInformationThird :active="acc.third" :formData="formData" :options="optionsMulti" :valueMulti="valueMulti" :handle="handle"></companyInformationThird>

  </div>
</template>
