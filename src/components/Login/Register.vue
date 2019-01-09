<template>
<transition name="fade" mode="out-in">
  <div>
    <!-- Powrót -->
    <div class="login">
      <span class="login-dark-text">Przekonaj się jakie to proste!</span>
      <span class="login-light-text">Zarejestruj się już dziś</span>
      <form @submit.prevent="onSubmit">
        <div class="login__box">
          <!-- <img src="../../../public/temp/profile.jpg" alt="profile" class="login__box-profileImg"> -->
          <div class="login__box-profileImg">
            <avatar :name='avatarName' size='110' :rounded=true />
          </div>
          <div class="login__box-loginForm">
            <input type="text" placeholder="Wpisz adres e-mail" v-model="formData.email" v-if="validate">
            <span :class="{login__error: error}" v-if="validate">
                {{validate()}}
              </span>
            <input type="password" placeholder="Wpisz hasło" v-model="formData.password" v-if="validate">
            <span :class="{login__error: error}" v-if="validate">
                {{validate()}}
              </span>
            <button class="btn login__box-loginForm-onSubmit login__box-loading" v-if="process === 1">
             <loading-svg color="#FF0505"></loading-svg>
            </button>
            <button class="btn login__box-loginForm-onSubmit" v-else>
              Zarejestruj się
            </button>
          </div>
        </div>
      </form>
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
      this.$store.dispatch('userAuth/signup', this.formData)
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
