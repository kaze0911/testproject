import express from 'express';
const Routes = express.Router();

import { GetCourse, GetContent } from '../Controller/course.js';

Routes.route('/').get(GetCourse);
Routes.route('/content').get(GetContent);

export default Routes;