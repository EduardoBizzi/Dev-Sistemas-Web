import { AppDataSource } from "@shared/typeorm/data-source";
import Livro from "../typeorm/entities/Livro";

export default class ListLivrosService {
  public async execute(): Promise<Livro[]> {
    const livrosRepository = AppDataSource.getRepository(Livro);
    return livrosRepository.find();
  }
}