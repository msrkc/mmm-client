<template>
  <div class="sidebar">
    <div class="burger">
      <div class="burger-bar"></div>
      <div class="burger-bar"></div>
      <div class="burger-bar"></div>
    </div>
    <ul class="icons">
      <router-link :to="{name: 'DashboardHome'}" tag="li" class="icons__item" exact-active-class="icons__item icons-active">
      <img src="@/assets/img/sidebar/home.svg" alt="">
      </router-link>
      <li class="icons__item">
        <img src="@/assets/img/sidebar/user.svg" alt="">
      </li>
      <router-link :to="{name: 'CompanyInformation'}" tag="li" class="icons__item" active-class="icons__item icons-active">
      <img src="@/assets/img/sidebar/tool.svg" alt="">
      </router-link>
      <li class="icons__item">
        <img src="@/assets/img/sidebar/calendar.svg" alt="">
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}

</script>

<style>

</style>
