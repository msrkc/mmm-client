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
              <input type="text" placeholder="Wpisz adres e-mail" required>
              <input type="password" placeholder="Wpisz hasło" required>
              <button class="btn login__box-loginForm-onSubmit">Zarejestruj się</button>
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
      password: ''
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        email: this.email,
        password: this.password
      }
      console.log(formData)
      this.$store.dispatch('signup', {
        formData
      })
    }
  }
}
</script>
