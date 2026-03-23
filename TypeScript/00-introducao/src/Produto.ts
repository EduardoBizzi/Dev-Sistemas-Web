export class Produto {
    private codigo: number;
    private descricao: string;
    private valor: number;

    constructor(codigo: number, descricao: string, valor: number) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.valor = valor;
    }

    getValor(): number {
        return this.valor;
    }

}