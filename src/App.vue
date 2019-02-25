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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #ffffff;
  background-color: #2b2b2b;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
}

.nav {
  top: 0;
}
.content {
  margin: auto;
  width: 80%;
  min-height: 100%;
}
.footer {
  display: flex;
  justify-self: flex-end;
}
</style>
