<template>
  <v-main class="main">
    <v-container class="container" fluid>
      <molecula-selecao></molecula-selecao>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { MoleculaSelecao } from "@/components/moleculas";

@Component({
  components: {
    MoleculaSelecao,
  },
})
export default class TemplatePadrao extends Vue {}
</script>

<style scoped></style>
