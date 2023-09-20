import express from 'express';
const Routes = express.Router();


import { GetA_Blog,GetNew,PostArticle,GetId,DeleteArticle,GetEdit,EditArticle } from '../Controller/blog.js';

//文章列表頁面
Routes.route('/').get(GetA_Blog);
//創建文章頁面
Routes.route('/new').get(GetNew);
//創建文章fuction
Routes.route('/').post(PostArticle);
//查看ID文章的內容
Routes.route('/:id').get(GetId);
//刪除文章fuction
Routes.route('/:id').delete(DeleteArticle);
//渲染修改文章頁面
Routes.route('/edit/:id').get(GetEdit);
//修改文章的fuction
Routes.route('/:id').put(EditArticle);

export default Routes;