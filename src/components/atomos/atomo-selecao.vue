<template>
  <v-select
    :items="itens"
    v-model="itemInterno"
    :item-text="textoItem"
    :item-value="valorItem"
    :placeholder="placeholder"
    dense
    outlined
    item-color="primary"
    @change="onChange"
    no-data-text="Os dados não estão disponíveis"
  ></v-select>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Emit, Watch } from "vue-property-decorator";

@Component
export default class AtomoSelecao extends Vue {
  private itemInterno: number | null = null;

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
  itemSelecionado!: number | null;

  @Prop()
  itens!: any[];

  @Prop()
  textoItem!: string;

  @Prop()
  valorItem!: number;

  @Prop({ type: String, default: "" })
  placeholder?: string;
}
</script>

<style lang="scss" scoped></style>
