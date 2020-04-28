<template>
    <fieldset>
      <legend>Dados do veículos</legend>
      <h1>Placa</h1>
      <label for="placa"></label>
      <input type="text" placeholder="Placa do veículo" v-model="placaInformada" maxlength="8">
      <button @click="pesquisar">OK</button>
    </fieldset>
</template>

<script>
export default {
  data: function() {
        return {
            placaInformada: ''
        }
    },
    methods: {
      pesquisar: function() {
          console.log("passou consulta")        
          this.$store.state.infracoesVeiculo = this.$store.state.infracoesPlaca.filter(placa => placa.PLACA == this.placaInformada)
          this.$router.push("/infracoes")
        }
    } 
  }
</script>

<style>

</style>