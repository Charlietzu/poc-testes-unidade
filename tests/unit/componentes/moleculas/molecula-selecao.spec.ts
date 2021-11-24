import { createLocalVue, mount } from "@vue/test-utils";
import { MoleculaSelecao } from "@/components/moleculas";
import Vuetify from "vuetify";
import Vue, { VueConstructor } from "vue";
import { AtomoSelecao } from "@/components/atomos";
import Vuex from "vuex";
import store from "@/store";

const localVue: VueConstructor<Vue> = createLocalVue();
localVue.use(Vuex);
describe("molecula-selecao.vue", () => {
  let vuetify: Vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  const montarComponente = (options: Record<string, unknown>) => {
    return mount(MoleculaSelecao, {
      store,
      localVue,
      vuetify,
      ...options,
    });
  };
  it("Renderiza o componente corretamente", () => {
    //Arrange & Act
    const wrapper = montarComponente({});
    //Assert
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("Deve ter o componente AtomoSelecao como filho", () => {
    //Arrange & Act
    const wrapper: any = montarComponente({});

    //Assert
    expect(wrapper.findComponent(AtomoSelecao).exists()).toBe(true);
  });

  it("Deve chamar alteracaoSelecaoAlimento caso AtomoSelecao emita evento alteracaoSelect", async () => {
    //Arrange
    const wrapper: any = montarComponente({});

    //Act
    await wrapper.findComponent(AtomoSelecao).vm.$emit("alteracaoSelect", 2);
    await wrapper.vm.$nextTick();

    //Assert
    expect(wrapper.vm.alimentoSelecionado).toBe(2);
  });
});
