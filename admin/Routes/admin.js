import express from "express";
const Routes = express.Router();

import {GetAdmin,GetA_Store,GetA_Blog} from '../Controller/admin.js';

//管理員頁面
Routes.route('/').get(GetAdmin);
//管理商品頁面
Routes.route('/A_store').get(GetA_Store);
//管理博客
Routes.route('/A_blog').get(GetA_Blog);

export default Routes;