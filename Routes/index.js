import express from 'express';
const Routes = express.Router();

import { GetIndex } from '../Controller/index.js';

Routes.get('/' , GetIndex);

export default Routes;