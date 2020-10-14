import {Router} from 'express';
import OrphanagesController from './controllers/orphanagesController';
import multer from 'multer';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);


routes.post('/orphanages', upload.array('images'), OrphanagesController.Create);
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);

export default routes;

