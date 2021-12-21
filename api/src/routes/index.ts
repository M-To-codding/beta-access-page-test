import { Router } from 'express';
import { adminMW } from './middleware';
import { login, logout } from './Auth';
import { getAllProducts, addOneProduct } from './Products';


// Auth router
const authRouter = Router();
authRouter.post('/login', login);
authRouter.get('/logout', logout);


// Product-router
const productRouter = Router();
productRouter.get('/', getAllProducts);
productRouter.post('/add', addOneProduct);
// productRouter.put('/update', updateOneProduct);
// productRouter.delete('/delete/:id', deleteOneProduct);

// Export the base-router
const baseRouter = Router();
baseRouter.use('/auth', authRouter);
baseRouter.use('/home', productRouter);
baseRouter.use('/store', productRouter);
baseRouter.use('/admin', adminMW, productRouter);
export default baseRouter;
