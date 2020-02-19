<template>
  <div id="app">
    <navigation />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default {
  name: 'app',
  components: { Navigation, Footer },
  }

</script>

<style lang="scss">
  @import "./assets/scss/global.scss";
</style>
