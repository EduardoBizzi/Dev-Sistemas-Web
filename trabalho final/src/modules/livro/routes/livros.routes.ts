import { Router } from 'express';
import LivrosController from '../controllers/LivrosController';
import { celebrate, Joi, Segments } from 'celebrate';

const livrosRouter = Router();
const livrosController = new LivrosController();

livrosRouter.get('/', celebrate({
 [Segments.QUERY] : {
  page: Joi.number().optional(),
  limit: Joi.number().optional()
 }
}), async (req, res, next) => {
  try {
    await livrosController.index(req, res, next);
  } catch (err) {
    next(err);
  }
});

livrosRouter.get('/:id', celebrate({
 [Segments.PARAMS] : {id: Joi.string().uuid().required()}
}), async (req, res, next) => {
  try {
    await livrosController.show(req, res, next);
  } catch (err) {
    next(err);
  }
});

livrosRouter.post('/', celebrate({
 [Segments.BODY]: {
  titulo: Joi.string().required(),
  autor: Joi.string().required(),
  ano: Joi.number().required()
 }
}), async (req, res, next) => {
  try {
    await livrosController.create(req, res, next);
  } catch (err) {
    next(err);
  }
});

livrosRouter.put('/:id', celebrate({
 [Segments.PARAMS]: { id: Joi.string().uuid().required() },
 [Segments.BODY]: {
  titulo: Joi.string().optional(),
  autor: Joi.string().optional(),
  ano: Joi.number().optional()
 }
}), async (req, res, next) => {
  try {
    await livrosController.update(req, res, next);
  } catch (err) {
    next(err);
  }
});

livrosRouter.delete('/:id', celebrate({
 [Segments.PARAMS]: { id: Joi.string().uuid().required() }
}), async (req, res, next) => {
  try {
    await livrosController.delete(req, res, next);
  } catch (err) {
    next(err);
  }
});

export default livrosRouter;