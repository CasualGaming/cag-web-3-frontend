<template>
  <div class="home">
    <section class="cag-banner" style="background-image: url('@/assets/img/home/trondelan.jpg');">Heres the CaG banner</section>
    <section class="link-section">
      <article class="link" style="background-image: src('../assets/img/home/trondelan.jpg');">
        <header class="major">
          <router-link class="link" to="/trondelan">
            <h3>Trøndelan</h3>
            <p>Et lan-party for alle</p>
          </router-link>
        </header>
      </article>
      <article class="link" style="background-image: url('@/assets/img/home/trondelan.jpg');">Lenke til studlan</article>
      <article class="link" style="background-image: url('@/assets/img/home/trondelan.jpg');">Lenke til spillkvelder</article>
      <article class="link" style="background-image: url('@/assets/img/home/trondelan.jpg');">Lenke til opptak</article>
    </section>
    <section class="about">Meldingen om kort hva vi er</section>
    <section class="sponsors">Sponsorer</section>
  </div>
</template>

<style lang="scss" scoped>
.link-section {
  display: flex;
  flex-wrap: wrap;
}
.link {
  flex: 1 0;
  text-decoration: none;
  color: white;
}
.link-section article {
  padding: 4em 4em 2em 4em;
  background-position: center;
  background-repeat: no-repeat;
  height: 40vh;
  min-height: 40em;
  min-height: 23em;
  overflow: hidden;
  position: relative;
  width: 45%;

  header {
    z-index: 3;
  }
}

header.major {
  width: max-content;
  margin-bottom: 2em;
}
</style>
