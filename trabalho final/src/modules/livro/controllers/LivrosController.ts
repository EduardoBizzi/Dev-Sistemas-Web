import { Request, Response, NextFunction } from 'express';
import CreateLivroService from '../services/CreateLivroService';
import DeleteLivroService from '../services/DeleteLivroService';
import ListLivrosService from '../services/ListLivroService';
import ShowLivroService from '../services/ShowLivroService';
import UpdateLivroService from '../services/UpdateLivroService';

export default class LivrosController {

  public async index(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const listLivros = new ListLivrosService();
      const livros = await listLivros.execute();
      return response.json(livros);
    } catch (err) {
      next(err);
    }
  }

  public async show(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const id = request.params.id as string;
      const showLivro = new ShowLivroService();
      const livro = await showLivro.execute({ id });
      return response.json(livro);
    } catch (err) {
      next(err);
    }
  }

  public async create(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { nome, autores, ano, tipo, quantidade } = request.body;

      const createLivro = new CreateLivroService();
      const livro = await createLivro.execute({
        nome,
        autores,
        ano,
        tipo,
        quantidade,
      });

      return response.status(201).json(livro);
    } catch (err) {
      next(err);
    }
  }

  public async update(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const id = request.params.id as string;
      const { nome, autores, ano, tipo, quantidade } = request.body;

      const updateLivro = new UpdateLivroService();
      const livro = await updateLivro.execute({
        id,
        nome,
        autores,
        ano,
        tipo,
        quantidade,
      });

      return response.json(livro);
    } catch (err) {
      next(err);
    }
  }

  public async delete(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const id = request.params.id as string;

      const deleteLivro = new DeleteLivroService();
      await deleteLivro.execute({ id });

      return response.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}
