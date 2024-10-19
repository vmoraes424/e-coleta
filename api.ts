export interface IColetor {
  nome: string;
  idade: number;
  metal: number;
  papelao: number;
  plastico: number;
}

export const coletores: IColetor[] = [
  {
    nome: "Muliro",
    idade: 34,
    metal: 30,
    papelao: 300,
    plastico: 30,
  },
  {
    nome: "Hans",
    idade: 25,
    metal: 30,
    papelao: 30,
    plastico: 30,
  },
  {
    nome: "Castilhos",
    idade: 29,
    metal: 30,
    papelao: 30,
    plastico: 30,
  },
  {
    nome: "Vinicius",
    idade: 31,
    metal: 30,
    papelao: 30,
    plastico: 30,
  },
];
