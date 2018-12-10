<template>
  <header class="header">
    <div class="header__logo">
      <router-link to="/">
        <img src="@/assets/img/logo.png" alt="mmm">
      </router-link>
    </div>
    <div class="header__buttons">
      <router-link
        to="/register"
        class="btn header__buttons-btn"
        tag="button"
        v-if="$route.name === 'login'"
      >Rejestracja</router-link>
      <router-link
        to="/login"
        class="btn header__buttons-btn"
        tag="button"
        v-if="$route.name === 'register'"
      >Mam już konto</router-link>
    </div>
  </header>
</template>
