import { moduloAlimentos } from "@/store";
import { Alimento } from "@/store/AlimentosModule";
describe("AlimentosModule", () => {
  it("Action atualizarAlimentoSelecionado deve atualizar o alimentoSelecionado", () => {
    //Arrange
    const codigoAlimentoSelecionado = 2;

    //Act
    moduloAlimentos.atualizarAlimentoSelecionado(codigoAlimentoSelecionado);

    //Assert
    expect(moduloAlimentos.alimentoSelecionado).toBe(codigoAlimentoSelecionado);
  });

  it("Action obterAlimentos deve obter os alimentos", () => {
    //Arrange
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

    //Act
    moduloAlimentos.obterAlimentos(alimentos);

    //Assert
    expect(moduloAlimentos.alimentos).toBe(alimentos);
  });
});
