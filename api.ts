export interface IColetor {
  nome: string;
  idade: number;
  metal: number;
  papelao: number;
  plastico: number;
  link: string;
}

export const coletores: IColetor[] = [
  {
    nome: "Muliro",
    idade: 34,
    metal: 90,
    papelao: 300,
    plastico: 400,
    link: "https://nubank.com.br/cobrar/18gx1f/67142936-619a-4dbd-9216-fedee8c05a1f",
  },
  {
    nome: "Hans",
    idade: 25,
    metal: 2,
    papelao: 340,
    plastico: 390,
    link: "https://nubank.com.br/cobrar/18gx1f/67142936-619a-4dbd-9216-fedee8c05a1f",
  },
  {
    nome: "Castilhos",
    idade: 29,
    metal: 600,
    papelao: 30,
    plastico: 89,
    link: "https://nubank.com.br/cobrar/18gx1f/67142936-619a-4dbd-9216-fedee8c05a1f",
  },
  {
    nome: "Vinicius",
    idade: 31,
    metal: 5,
    papelao: 97,
    plastico: 450,
    link: "https://nubank.com.br/cobrar/18gx1f/67142936-619a-4dbd-9216-fedee8c05a1f",
  },
];
