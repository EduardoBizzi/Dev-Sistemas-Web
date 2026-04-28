import livrosRouter from "@modules/livro/routes/livros.routes";
import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate';

const routes = Router();
routes.use('/livros', livrosRouter);
export default routes;
