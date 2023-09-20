import express from 'express';
const Routes = express.Router();

import { GetAbout, GetContact } from '../Controller/about.js';

Routes.route('/').get(GetAbout);
Routes.route('/contact').get(GetContact);

export default Routes;