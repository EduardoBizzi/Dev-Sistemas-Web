import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";
import Livro from "../typeorm/entities/Livro";

interface IRequest {
  id: string;
  nome: string;
  autores: string;
  ano: number;
  tipo: string;
  quantidade: number;
}

export default class UpdateLivroService {
  public async execute({
    id,
    nome,
    autores,
    ano,
    tipo,
    quantidade,
  }: IRequest): Promise<Livro> {

    const livrosRepository = AppDataSource.getRepository(Livro);

    const livro = await livrosRepository.findOneBy({ id });

    if (!livro) {
      throw new AppError("Livro não encontrado.");
    }

    const livroExists = await livrosRepository.findOne({
      where: { nome },
    });

    if (livroExists && livroExists.id !== livro.id) {
      throw new AppError("Já existe um livro com esse nome.");
    }

    livro.nome = nome;
    livro.autores = autores;
    livro.ano = ano;
    livro.tipo = tipo;
    livro.quantidade = quantidade;

    await livrosRepository.save(livro);

    return livro;
  }
}
