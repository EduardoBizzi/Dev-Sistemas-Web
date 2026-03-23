export class Endereco {
    private rua: string;
    private numero: number;
    private cidade: string;
    private estado: string;

    constructor(rua: string, numero: number, cidade: string, estado: string) {
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
    }
}