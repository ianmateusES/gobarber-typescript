import { Router } from 'express';
import SessionsController from '../controllers/SessionsController';

// http://localhost:3333/sessions
const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
