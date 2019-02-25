<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HomeContent msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HomeContent from "@/components/HomeContent.vue";

export default {
  name: "home",
  components: {
    HomeContent
  }
}
</script>
