<template>
  <div id="app">
    <the-navbar class="nav" />
    <router-view class="content" />
    <the-footer class="footer" />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>

<style lang="scss">
html, body {
    margin: 0;
}

#app {
  font-family: "Source Sans Pro", Helvetica, sans-serif;
  font-weight: 300;
  letter-spacing: 0.025em;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  background-color: #2a2f4a;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
}
.nav {
  top: 0;
}
.content {
  margin: auto;
  width: 100%;
  min-height: 100%;
}
.footer {
  display: flex;
  justify-self: flex-end;
  background-color: #242943;
}
</style>
