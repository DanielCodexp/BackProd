import { Router } from 'express';
import auth from './auth';
import user from './user';
import products from './products';
import reports from './reports';
import image from './image';

const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/products', products)
routes.use('/reports',reports)
routes.use('/image',image)

export default routes;
