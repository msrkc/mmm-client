<template>
<transition name="fade" mode="out-in">
  <div>
    <!-- Powrót -->
    <div class="login">
      <span class="login-dark-text">Sprawdź najnowsze funkcje!</span>
      <span class="login-light-text">Zaloguj się</span>
      <div class="login__box">
        <!-- <img src="../../../public/temp/profile.jpg" alt="profile" class="login__box-profileImg"> -->
        <div class="login__box-profileImg">
          <avatar :name='avatarName' size='110' :rounded=true />
        </div>
        <form @submit.prevent="onSubmit">
          <div class="login__box-loginForm">
            <input
                type="text"
                id="email"
                v-model="formData.email"
                placeholder="Wpisz adres e-mail"
              >
            <span :class="{login__error: error}" v-if="validate">
                {{validate()}}
              </span>
            <input
                type="password"
                id="password"
                v-model="formData.password"
                placeholder="Wpisz hasło"
              >
            <span :class="{login__error: error}" v-if="validate">
                {{validate()}}
              </span>
            <button class="btn login__box-loginForm-onSubmit login__box-loading" v-if="process === 1">
             <loading-svg color="#FF0505"></loading-svg>
            </button>
            <button class="btn login__box-loginForm-onSubmit" v-else>
              Zaloguj się
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import loadingSvg from '@/components/UI/form/loading.vue'
import avatar from '@/components/UI/avatar.vue'
export default {
  data () {
    return {
      formData: {
        email: '',
        password: ''
      },
      error: false
    }
  },
  computed: {
    process () {
      return this.$store.getters['userAuth/process']
    },
    avatarName () {
      let avatar = this.formData.email
      if (avatar.length <= 0) {
        avatar = 'makemymind'
      }
      return avatar
    }
  },
  methods: {
    validate () {
      const errors = this.$store.getters['userAuth/errors']
      if (errors.email) {
        this.error = true
        return errors.email[0]
      } else if (errors.password) {
        this.error = true
        return errors.password[0]
      }
    },
    onSubmit () {
      this.$store.dispatch('userAuth/login', this.formData)
      setTimeout(() => {
        this.formData.email = ''
        this.formData.password = ''
      }, 1500)
      setTimeout(() => {
        this.$store.dispatch('userAuth/cleanError')
        this.error = false
      }, 5000)
    }
  },
  beforeDestroy () {
    this.$store.dispatch('userAuth/cleanError')
  },
  components: {
    loadingSvg,
    avatar
  }
}
</script>
