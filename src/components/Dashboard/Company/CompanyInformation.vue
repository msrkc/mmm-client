<script>
import CompanyInformationFirst from '@/components/Dashboard/Company/CompanyInformationFirst.vue'
import CompanyInformationSecond from '@/components/Dashboard/Company/CompanyInformationSecond.vue'
import CompanyInformationThird from '@/components/Dashboard/Company/CompanyInformationThird.vue'
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
      let accordions = this.acc
      Object.keys(accordions).forEach(function (key) {
        if (key === item) {
          accordions[key] = !accordions[key]
        } if (key !== item) {
          accordions[key] = false
        }
      })
    },
    collapseOnSubmit (childCollapse) {
      this.handle(childCollapse)
      window.smoothscroll()
    },
    mountedScroll () {
      window.smoothscroll = () => {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
        if (currentScroll > 0) {
          window.requestAnimationFrame(window.smoothscroll)
          window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
        }
      }
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
      const obj = this.formData
      let status = 0
      Object.keys(obj).map((item) => {
        const entry = obj[item]
        if (typeof entry === 'string' && entry === '') {
          return entry
        } else if (entry === null) {
          return entry
        } else if (typeof entry !== 'undefined' && entry.toString().length > 0) {
          status++
        }
      })
      return (status - 5) * 100 / 40
    }
  },
  mounted () {
    this.mountedScroll()
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
  <div class="companyInfo" ref="accordions">
    <div style="height:5px;background:orange" :style="{width: progressBar + '%'}"></div>

    <companyInformationFirst :active="acc.first" :formData="formData" :options="options" :handle="handle" @collapseParent="collapseOnSubmit"></companyInformationFirst>
    <companyInformationSecond :active="acc.second" :formData="formData" :options="options" :handle="handle" @collapseParent="collapseOnSubmit"></companyInformationSecond>
    <companyInformationThird :active="acc.third" :formData="formData" :options="options" :handle="handle"></companyInformationThird>
  </div>
</template>
