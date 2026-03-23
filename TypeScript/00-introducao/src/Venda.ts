import { Cliente } from "./Cliente";
import { Produto } from "./Produto";

export class Venda {
    private cliente: Cliente;
    private produtos: Produto[];
    private data: number;
    private codigo: number;

    constructor(cliente: Cliente, produtos: Produto[], data: number, codigo: number) {
        this.cliente = cliente;
        this.produtos = produtos;
        this.data = data;
        this.codigo = codigo;
    }

    calcularTotal(): number {
        let valorTotal = 0;
        for (let produto of this.produtos) {
            valorTotal += produto.getValor();
        }
        return valorTotal;
    }
}
