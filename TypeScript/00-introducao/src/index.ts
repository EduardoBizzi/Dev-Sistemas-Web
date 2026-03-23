import { Cliente } from "./Cliente";
import { Endereco } from "./Endereco";
import { Telefone } from "./Telefone";
import { Produto } from "./Produto";
import { Venda } from "./Venda";
const endereco = new Endereco("Rua das Flores", 123, "Curitiba", "PR");

const telefone1 = new Telefone("41", "999999999", "celular");
const telefone2 = new Telefone("41", "33334444", "fixo");

const cliente = new Cliente(
  "Eduardo",
  "12345678900",
  new Date("1990-01-01"),
    "MASCULINO",
  endereco,
  [telefone1, telefone2]
);

const produto1 = new Produto(1, "Notebook", 3500);
const produto2 = new Produto(2, "Mouse", 150);

const venda = new Venda(cliente, [produto1, produto2], 20260322, 1001);

console.log("Total da venda: R$ " + venda.calcularTotal());