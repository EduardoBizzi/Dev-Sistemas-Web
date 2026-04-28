import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";
import Livro from "../typeorm/entities/Livro";

interface IRequest {
  nome: string;
  autores: string;
  ano: number;
  tipo: string;
  quantidade: number;
}

export default class CreateLivroService {
  public async execute({
    nome,
    autores,
    ano,
    tipo,
    quantidade,
  }: IRequest): Promise<Livro> {

    const livrosRepository = AppDataSource.getRepository(Livro);

    const livroExists = await livrosRepository.findOne({
      where: { nome },
    });

    if (livroExists) {
      throw new AppError("Já existe um livro com esse nome.");
    }

    const livro = livrosRepository.create({
      nome,
      autores,
      ano,
      tipo,
      quantidade,
    });

    await livrosRepository.save(livro);

    return livro;
  }
}
