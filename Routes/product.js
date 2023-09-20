import express from 'express';
const Routes = express.Router();

import {GetCategory,GetPets,GetProduct ,GetAPage} from '../Controller/product.js';


//Get
//寵物種類頁面
Routes.route('/category').get(GetCategory);
//寵物用品頁面
Routes.route('/pets').get(GetPets);
//商品詳細頁面
Routes.route('/product').get(GetProduct);

Routes.get('/:title',GetAPage);


export default Routes;