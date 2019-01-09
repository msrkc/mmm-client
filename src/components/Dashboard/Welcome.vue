<template>
  <div>
    <div class="login" v-if="isLoading">
      <div class="loading">
        <img src="@/assets/img/loading.png" alt="">
        <span class="login-dark-text">Przetwarzanie danych</span>
        <span class="login-light-text">Jeszcze tylko chwila</span>
        <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </div>
    </div>
    <div class="login" v-else>
      <span class="login-dark-text">Opowiedz o firmie</span>
      <span class="login-light-text">Personalizacja</span>
      <div class="login__box">
        <form>
          <div class="login__box-loginForm">
            <input
                type="text"
                placeholder="Wpisz nazwę firmy"
              >
            <span class="login-welcome-text">Ilu pracowników zatrudnia Twoja firma?</span>
            <div class="login-radio-img">
              <input
                  type="radio" name="company_size"
                  id="10" class="input-hidden" value="10" />
              <label for="10">
                <img src="@/assets/img/form/welcome/10.png" />
                <span>10</span>
              </label>
              <input checked="checked"
                  type="radio" name="company_size"
                  id="50" class="input-hidden" />
              <label for="50">
              <img src="@/assets/img/form/welcome/50.png"/>
              <span>10-50</span>
              </label>
              <input
                  type="radio" name="company_size"
                  id="150" class="input-hidden" />
              <label for="150">
              <img src="@/assets/img/form/welcome/150.png"/>
              <span>50-150</span>
              </label>
              <input
                  type="radio" name="company_size"
                  id="500" class="input-hidden" />
              <label for="500">
              <img src="@/assets/img/form/welcome/500.png"/>
              <span>150-500</span>
              </label>
              <input
                  type="radio" name="company_size"
                  id="500plus" class="input-hidden" />
              <label for="500plus">
              <img src="@/assets/img/form/welcome/500plus.png"/>
              <span>500+</span>
              </label>
            </div>
            <span class="login-welcome-text">Ile stanowisk planujesz otworzyć w ciągu najbliższych 6 miesięcy?</span>
            <div class="login-radio-img">
              <input
                  type="radio" name="company_size_plan"
                  id="p10" class="input-hidden" />
              <label for="p10">
                <img src="@/assets/img/form/welcome/p10.png" />
                <span>10</span>
              </label>
              <input checked="checked"
                  type="radio" name="company_size_plan"
                  id="p20" class="input-hidden" />
              <label for="p20">
              <img src="@/assets/img/form/welcome/p20.png"/>
              <span>10-20</span>
              </label>
              <input
                  type="radio" name="company_size_plan"
                  id="p50" class="input-hidden" />
              <label for="p50">
              <img src="@/assets/img/form/welcome/p50.png"/>
              <span>20-50</span>
              </label>
              <input
                  type="radio" name="company_size_plan"
                  id="p50plus" class="input-hidden" />
              <label for="p50plus">
              <img src="@/assets/img/form/welcome/p50plus.png"/>
              <span>50+</span>
              </label>
            </div>
            <button class="btn login__box-loginForm-onSubmit" @click.prevent="formHandler">
              Rozpocznij
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      isLoading: true
    }
  },
  methods: {
    formHandler () {
      console.log('form')
    },
    falseLoading () {
      setTimeout(() => {
        this.isLoading = false
      }, 3000)
    }
  },
  mounted () {
    this.falseLoading()
  }
}
</script>

<style lang="scss" scoped>
.loading {
  margin-top: -20rem;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;

  img {
    justify-self: center;
    align-self: center;
  }
}

.spinner {
  text-align: center;
}

.spinner>div {
  width: 10px;
  height: 10px;
  background-color: #808080;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {

  0%,
  80%,
  100% {
    -webkit-transform: scale(0)
  }

  40% {
    -webkit-transform: scale(1.0)
  }
}

@keyframes sk-bouncedelay {

  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}
</style>
