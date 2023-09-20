import express from 'express';
const Routes = express.Router();

import {GetBlog, GetShow} from '../Controller/blog.js'

Routes.route('/').get(GetBlog);
Routes.route('/:id').get(GetShow);

export default Routes;