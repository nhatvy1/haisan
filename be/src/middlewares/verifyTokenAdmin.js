import jwt from 'jsonwebtoken'

const verifyTokenAdmin = (req, res, next)=> {
    let accessToken = req.headers.authorization?.split(' ')[1]
    if (!accessToken) {
        return res.status(200).json({
            err: 1,
            msg: 'Missing access token'
        })
    }

    jwt.verify(accessToken, process.env.SECRET_KEY, (err, user)=> {
        if (err) {
            return res.status(401).json({
                err: 1,
                msg: 'Access token not valid or expired'
            })
        }
    
        req.user = user
        if(user.role !== 'admin') {
            return res.status(401).json({
                err: 1,
                msg: `You don't have access`
            })
        }
        next()
    })
}

export default verifyTokenAdmin
