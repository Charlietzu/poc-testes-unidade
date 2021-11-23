<template>
  <atomo-selecao
    :itens="tiposIntegracao"
    :itemSelecionado="codigoTipoIntegracaoSelecionado"
    textoItem="descricao"
    valorItem="grupo"
    placeholder="Selecione integração"
    classes="select-tipo-integracao"
    corDeFundo="#fff"
    @alteracaoSelect="alteracaoSelectTipoIntegracao"
  ></atomo-selecao>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { AtomoSelecao } from "@/components/atomos";
@Component({
  components: {
    AtomoSelecao,
  },
})
export default class MoleculaSelecao extends Vue {
  
}
</script>
