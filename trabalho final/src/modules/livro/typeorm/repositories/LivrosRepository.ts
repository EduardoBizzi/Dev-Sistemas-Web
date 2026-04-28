import { AppDataSource } from "@shared/typeorm/data-source";
import { Repository } from "typeorm";
import Livro from "../entities/Livro";

export default class LivrosRepository {
  private ormRepository: Repository<Livro>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Livro);
  }

  public async findByNome(nome: string): Promise<Livro | null> {
    const livro = await this.ormRepository.findOne({
      where: { nome },
    });

    return livro;
  }
}