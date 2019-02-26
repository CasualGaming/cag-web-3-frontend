<template>
  <div class="nav-container">
    <router-link to="/"><img class="logo" src="@/assets/img/logo_64.png" /></router-link>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/studlan">Studlan</router-link>
      <router-link to="/trondelan">Trøndelan</router-link>
      <router-link to="/contactInfo">Kontaktinformasjon</router-link>
      <router-link to="/gameNights">Spillkvelder</router-link>
      <router-link to="/applyToCag">Opptak</router-link>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'TheNavbar'
}
</script>

<style lang="scss">
.nav-container {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
}
nav {
  display: flex;
  justify-content: center;
  height: 70px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
    padding: 20px;
    &:hover {
      opacity: 0.7;
    }
  }
  .logo {
    // position: fixed;
    left: 25px;
  }
}
</style>
