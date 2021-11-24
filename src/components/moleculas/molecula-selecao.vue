<template>
  <atomo-selecao
    :itens="alimentos"
    :itemSelecionado="alimentoSelecionado"
    valorItem="codigoAlimento"
    textoItem="nomeAlimento"
    placeholder="Selecione Alimento"
    corDeFundo="#fff"
    @alteracaoSelect="alteracaoSelecaoAlimento"
  ></atomo-selecao>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { AtomoSelecao } from "@/components/atomos";
import { getModule } from "vuex-module-decorators";
import AlimentosModule, { Alimento } from "@/store/AlimentosModule";
@Component({
  components: {
    AtomoSelecao,
  },
})
export default class MoleculaSelecao extends Vue {
  private moduloAlimentos = getModule(AlimentosModule, this.$store);

  get alimentos(): Alimento[] {
    return this.moduloAlimentos.alimentos;
  }

  get alimentoSelecionado(): number | null {
    return this.moduloAlimentos.alimentoSelecionado;
  }

  alteracaoSelecaoAlimento(codigoAlimentoSelecionado: number): void {
    this.moduloAlimentos.atualizaAlimentoSelecionado(codigoAlimentoSelecionado);
  }
}
</script>
