import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentControllers from '../controllers/AppointmentsController';

// http://localhost:3333/appointments
const appointmentsRouter = Router();
const appointmentControllers = new AppointmentControllers();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointmentControllers.create);

export default appointmentsRouter;
