<template>
<transition name="fade" mode="out-in">
  <div>
    <!-- Powrót -->
    <div class="login">
      <span class="login-dark-text">Przekonaj się jakie to proste!</span>
      <span class="login-light-text">Zarejestruj się już dziś</span>
      <form @submit.prevent="onSubmit">
        <div class="login__box">
          <img src="../../../public/temp/profile.jpg" alt="profile" class="login__box-profileImg">
          <div class="login__box-loginForm">
            <input type="text" placeholder="Wpisz adres e-mail" v-model="email" v-if="validateEmail">
            <span :class="{login__error: error}" v-if="validateEmail">
                {{validateEmail()}}
              </span>
            <input type="password" placeholder="Wpisz hasło" v-model="password" v-if="validatePassword">
            <span :class="{login__error: error}" v-if="validatePassword">
                {{validatePassword()}}
              </span>
            <button class="btn login__box-loginForm-onSubmit">
              <span v-if="$store.state.userAuth.process === 1"> Czekaj </span>
              <span v-else>Zarejestruj się</span>
              </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      error: false
    }
  },
  methods: {
    validateEmail () {
      if (this.$store.getters.errors.email) {
        this.error = true
        return this.$store.getters.errors.email[0]
      } else {}
    },
    validatePassword () {
      if (this.$store.getters.errors.password) {
        this.error = true
        return this.$store.getters.errors.password[0]
      }
    },
    onSubmit () {
      const formData = {
        email: this.email,
        password: this.password
      }
      // console.log(formData)
      this.$store.dispatch('signup', {
        email: formData.email,
        password: formData.password
      })
      this.email = ''
      this.password = ''
      setTimeout(() => {
        this.$store.dispatch('cleanError')
        this.error = false
      }, 5000)
    }
  }
}
</script>
