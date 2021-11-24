import { createLocalVue, mount } from "@vue/test-utils";
import { AtomoSelecao } from "@/components/atomos";
import { Alimento } from "@/store/AlimentosModule";
import Vuetify from "vuetify";
import Vue, { VueConstructor } from "vue";

const localVue: VueConstructor<Vue> = createLocalVue();
describe("atomo-selecao.vue", () => {
  let vuetify: Vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  const montarComponente = (options: Record<string, unknown>) => {
    return mount(AtomoSelecao, {
      localVue,
      vuetify,
      ...options,
    });
  };

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

  const propsCustomizadas = {
    itens: alimentos,
    itemSelecionado: alimentos[0].codigoAlimento,
    valorItem: "codigoAlimento",
    textoItem: "nomeAlimento",
    placeholder: "Selecione Alimento",
  };
  it("Renderiza o componente corretamente", () => {
    //Arrange & Act
    const wrapper = montarComponente({
      propsData: propsCustomizadas,
    });

    //Assert
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("Renderiza o estado inicial corretamente", () => {
    //Arrange & Act
    const wrapper: any = montarComponente({
      propsData: propsCustomizadas,
    });

    //Assert
    expect(wrapper.vm.itemInterno).toBe(wrapper.vm.itemSelecionado);
  });

  it("Evento alteracaoSelect deve ser emitido com apenas um argumento", () => {
    //Arrange
    const wrapper: any = montarComponente({
      propsData: propsCustomizadas,
    });

    //Act
    wrapper.vm.onChange(1);

    //Assert
    expect(wrapper.emitted().alteracaoSelect.length).toBe(1);
  });

  it("Item interno deve ser igualado a Item selecionado quando sofrer alguma alteração", async () => {
    //Arrange
    const wrapper: any = montarComponente({
      propsData: propsCustomizadas,
    });

    //Act
    wrapper.setData({ itemInterno: Math.random() });
    await wrapper.vm.$nextTick();

    //Assert
    expect(wrapper.vm.itemInterno).toEqual(wrapper.vm.itemSelecionado);
  });
});
