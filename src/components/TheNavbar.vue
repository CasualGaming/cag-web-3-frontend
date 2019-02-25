<template>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/studlan">Studlan</router-link> |
      <router-link to="/trondelan">Trøndelan</router-link> |
      <router-link to="/contactInfo">Kontaktinformasjon</router-link> |
      <router-link to="/gameNights">Spillkvelder</router-link> |
      <router-link to="/applyToCag">Opptak</router-link>
    </nav>
</template>

<script>
export default {
    name: 'TheNavbar'
}
</script>

<style lang="scss">
nav {
  background-color: black;
  padding: 30px;
  top: 0;
  left: 0;
}
</style>
