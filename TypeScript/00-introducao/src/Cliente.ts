import { Endereco } from "./Endereco";
import { Telefone } from "./Telefone";

export class Cliente {
    private nome: string;
    private cpf: string;
    private data_nascimento: Date;
    private sexo: string;
    private endereco: Endereco;
    private telefones: Telefone[];

    constructor(nome: string, cpf: string, data_nascimento: Date, sexo: string, endereco: Endereco, telefones: Telefone[]){
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
        this.sexo = sexo;
        this.endereco = endereco;
        this.telefones = telefones;
    }
}