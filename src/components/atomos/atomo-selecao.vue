<template>
  <v-select
    :items="itens"
    v-model="itemInterno"
    :item-text="textoItem"
    :item-value="valorItem"
    :placeholder="placeholder"
    dense
    outlined
    :background-color="corDeFundo"
    :class="classes"
    item-color="primary"
    @change="onChange"
    :loading="carregando"
    :disabled="carregando"
    no-data-text="Os dados não estão disponíveis"
  ></v-select>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Emit, Watch } from "vue-property-decorator";

@Component
export default class AtomoSelecao extends Vue {
  private itemInterno: any = null;

  @Prop()
  itemSelecionado?: number;

  @Watch("itemInterno")
  alterarItem(): void {
    this.itemInterno = this.itemSelecionado;
  }

  created(): void {
    this.itemInterno = this.itemSelecionado;
  }

  @Watch("itemInterno")
  @Emit("alteracaoSelect")
  onChange(valorSelecionado: number): number {
    return valorSelecionado;
  }

  @Prop()
  itens!: any;

  @Prop()
  textoItem!: string;

  @Prop()
  valorItem!: number;

  @Prop({ type: String, default: "" })
  placeholder?: string;

  @Prop({ type: String, default: "" })
  classes?: string;

  @Prop({ type: String, default: "#fff" })
  corDeFundo?: string;
}
</script>

<style lang="scss" scoped></style>
