import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";
import Livro from "../typeorm/entities/Livro";

interface IRequest {
  id: string;
}

export default class ShowLivroService {
  public async execute({ id }: IRequest): Promise<Livro> {
    const livrosRepository = AppDataSource.getRepository(Livro);

    const livro = await livrosRepository.findOneBy({ id });

    if (!livro) {
      throw new AppError("Livro não encontrado.");
    }

    return livro;
  }
}