export class Telefone {
    private ddd: string;
    private numero: string;
    private tipo: string;

    constructor(ddd: string, numero: string, tipo: string) {
        this.ddd = ddd;
        this.numero = numero;
        this.tipo = tipo;
    }
}