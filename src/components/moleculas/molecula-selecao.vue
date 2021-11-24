<template>
  <atomo-selecao
    :itens="alimentos"
    :itemSelecionado="alimentoSelecionado"
    valorItem="codigoAlimento"
    textoItem="nomeAlimento"
    placeholder="Selecione Alimento"
    @alteracaoSelect="alteracaoSelecaoAlimento"
  ></atomo-selecao>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { AtomoSelecao } from "@/components/atomos";
import { Alimento } from "@/store/AlimentosModule";
import { moduloAlimentos } from "@/store";
@Component({
  components: {
    AtomoSelecao,
  },
})
export default class MoleculaSelecao extends Vue {
  get alimentos(): Alimento[] {
    return moduloAlimentos.alimentos;
  }

  get alimentoSelecionado(): number | null {
    return moduloAlimentos.alimentoSelecionado;
  }

  alteracaoSelecaoAlimento(codigoAlimentoSelecionado: number): void {
    console.log('evento emitido')
    moduloAlimentos.atualizaAlimentoSelecionado(codigoAlimentoSelecionado);
  }
}
</script>
