import authRouter from './auth.route'
import userRouter from './user.route'
import cateRouter from './category.route'
import productRouter from './product.route'
import orderRouter from './order.route'
import adminRouter from './admin.route'


const initRoutes = (app)=> {
    app.use('/api/v1/auth', authRouter)
    app.use('/api/v1/categories', cateRouter)
    app.use('/api/v1/products', productRouter)
    app.use('/api/v1/order', orderRouter)
    
    app.use('/api/v1/user', userRouter)
    app.use('/api/v1/admin', adminRouter)

    return app.use('/', (req, res)=> {
        res.send('Server on...')
    })
}

export default initRoutes