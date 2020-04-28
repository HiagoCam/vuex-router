<template>
    <div id="infracoesCorpo">
        <div v-for="(infracao, index) in filtro" :key="index">
            <label>Placa:</label><br>
            <input id="input" type="text" :value="infracao.PLACA"><br>
            <label>Data e hora:</label><br>
            <input id="input" type="text" :value="infracao.DADOS_INFRACAO.DATAHORA"><br>
            <label>Localidade:</label><br>
            <input id="input" type="text" :value="infracao.LOCALIDADE"><br>
            <label>Tipo:</label><br>
            <input id="input" type="text" :value="infracao.DADOS_INFRACAO.TIPO"><br>
            <label>Valor:</label><br>
            <input id="input" type="text" :value="infracao.DADOS_INFRACAO.VALOR"><br>
            <label v-if="infracao.DADOS_INFRACAO.TIPO == 'VELOCIDADE'">Velocidade máxima: {{infracao.DADOS_INFRACAO.VEL_MAXIMA}}</label> <br>

            <button @click="voltar">Nova consulta</button><br>
        </div>
    </div>

</template>

<script>
export default {
    computed:{
        filtro: function(){
            return this.$store.state.infracoesVeiculo
        }
    },
    methods: {
        voltar: function(){
          this.$router.push({name:'Main'})
        }
    }
  }

</script>

<style>
#infracoesCorpo{
    margin: 10% 0 0 45%;
}
#input{
    margin: 3px 0px 0px 3px;
}
</style>