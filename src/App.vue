<template>
  <div id="app">
    <div id="nav" v-show="false">
      <router-link to="/"></router-link>
      <router-link to="/infracoes" v-show="false"></router-link>
    </div>
      <router-view/>
  </div>
</template>

<script>
const axios = require("axios");
export default{
  mounted(){
    axios.get("http://localhost:8080/infracoes.json").then(infracoesPlaca => this.$store.state.infracoesPlaca = infracoesPlaca.data)
  }
}
</script>
<style>

</style>
