<template>
  <transition name="fade" mode="out-in">
    <div>
      <!-- Powrót -->
      <div class="login">
        <span class="login-dark-text">Sprawdź najnowsze funkcje!</span>
        <span class="login-light-text">Zaloguj się</span>
        <div class="login__box">
          <img src="../../../public/temp/profile.jpg" alt="profile" class="login__box-profileImg">

          <form @submit.prevent="onSubmit">
            <div class="login__box-loginForm">
              <input
                type="text"
                id="email"
                v-model="email"
                placeholder="Wpisz adres e-mail"
                required
              >
              <span :class="{login__error: error}" v-if="validateEmail">
                {{validateEmail()}}
              </span>
              <input
                type="password"
                id="password"
                v-model="password"
                placeholder="Wpisz hasło"
                required
              >
              <span :class="{login__error: error}" v-if="validatePassword">
                {{validatePassword()}}
              </span>
              <button class="btn login__box-loginForm-onSubmit">Zaloguj się</button>
            </div>
          </form>
        </div>
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
      }
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
      console.log(formData)
      this.$store.dispatch('login', {
        email: formData.email,
        password: formData.password
      })
      this.email = ''
      this.password = ''
      setTimeout(() => {
        this.$store.dispatch('cleanError')
        this.error = false
      }, 3000)
    }
  }
}
</script>
