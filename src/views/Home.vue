<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HomeContent />
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
