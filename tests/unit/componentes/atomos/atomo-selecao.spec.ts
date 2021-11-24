import { mount } from "@vue/test-utils";
import { AtomoSelecao } from "@/components/atomos";
import { Alimento } from "@/store/AlimentosModule";

describe("atomo-selecao.vue", () => {
  it("Renderiza as props quando passadas", () => {
    const alimentos: Alimento[] = [
      {
        nomeAlimento: "Alface",
        codigoAlimento: 0,
      },
      {
        nomeAlimento: "Arroz",
        codigoAlimento: 1,
      },
      {
        nomeAlimento: "Batata",
        codigoAlimento: 2,
      },
    ];
    const wrapper = mount(AtomoSelecao, {
      propsData: {
        itens: alimentos,
      },
    });
  });
});
