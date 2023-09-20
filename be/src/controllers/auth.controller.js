import * as authService from '../services/auth.service';

export const register = async (req, res) => {
    const { firstName, lastName, username, password, status, avatar, phone } = req.body

    try {
        if (!firstName || !lastName || !username || !password || !phone) {
            return res.status(400).json({
                err: 1,
                msg: 'Missing inputs'
            })
        }
        const response = await authService.registerService(req.body)
        return res.status(200).json({ response })
    } catch(e) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at register controller: ' + e,
        })
    }
    

}

export const login = async(req, res) => {
    const { username , password } = req.body

    try {
        if (!username || !password) {
            return res.status(400).json({
                err: 1,
                msg: 'Missing inputs'
            })
        }
        const response = await authService.loginService(req.body)
        return res.status(200).json({ response })
    } catch(e) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at login controller: ' + e,
        })
    }
}
