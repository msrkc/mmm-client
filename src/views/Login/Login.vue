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
              <input
                type="password"
                id="password"
                v-model="password"
                placeholder="Wpisz hasło"
                required
              >
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
      password: ''
    }
  },
  methods: {
    // onSubmit() {
    //   const formData = {
    //     email: this.email,
    //     password: this.password
    //   };
    //   fetch("https://api.makemymind.com/client/login/", {
    //     method: "post",
    //     mode: "no-cors",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "multipart/form-data"
    //     },
    //     body: JSON.stringify({
    //       name: formData.email,
    //       password: formData.password
    //     })
    //   }).then(response => {
    //     console.log(response);
    //   });
    // }

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
    }
  }
}
</script>
