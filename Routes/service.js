import express from 'express';
const Routes = express.Router();

import { GetService, GetCapture, GetPlace, GetSpa, GetVet } from '../Controller/service.js';

Routes.route('/').get(GetService);
Routes.route('/capture').get(GetCapture);
Routes.route('/place').get(GetPlace);
Routes.route('/spa').get(GetSpa);
Routes.route('/vet').get(GetVet);

export default Routes;