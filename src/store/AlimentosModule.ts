import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

export interface Alimento {
  nomeAlimento: string;
  codigoAlimento: number;
}

@Module({ name: "Alimentos" })
export default class AlimentosModule extends VuexModule {
  private _alimentos: Alimento[] = [
/*     {
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
    }, */
  ];

  private _alimentoSelecionado: number | null = null;

  get alimentos(): Alimento[] {
    return this._alimentos;
  }

  get alimentoSelecionado(): number | null {
    return this._alimentoSelecionado;
  }

  @Mutation
  private setAlimentos(alimentos: Alimento[]): void {
    this._alimentos = alimentos;
  }

  @Mutation
  private setAlimentoSelecionado(codigoAlimento: number): void {
    this._alimentoSelecionado = codigoAlimento;
  }

  @Action
  atualizarAlimentoSelecionado(codigoAlimento: number): void {
    this.context.commit("setAlimentoSelecionado", codigoAlimento);
  }

  @Action
  obterAlimentos(alimentos: Alimento[]): void {
    this.context.commit("setAlimentos", alimentos);
  }
}
