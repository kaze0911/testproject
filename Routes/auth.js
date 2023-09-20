import express from 'express';
const Routes = express.Router();

import { GetAuth, GetLogin, GetRegister,PostRegitser,PostLogin,GetSuccess } from '../Controller/auth.js';

Routes.route('/').get(GetAuth);
Routes.route('/login').get(GetLogin);
Routes.route('/register').get(GetRegister);
Routes.route('/register').post(PostRegitser);
Routes.route('/login').post(PostLogin);
Routes.route('/success').get(GetSuccess);
// Routes.route('/logout').get(GetLogout);

export default Routes;