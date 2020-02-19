<template>
    <b-navbar class="fixed-top is-dark">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item><router-link to="/">Home</router-link></b-navbar-item>
            <b-navbar-item><router-link to="/about">About</router-link></b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary is-small">Logon to EdFlix</a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    name: 'Navigation',
  data() {
    return {
      images: {
        Logo: require("../assets/img/logo.svg")
      }
    };
  }
};
</script>
