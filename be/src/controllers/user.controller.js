import * as userService from '../services/user.service'

export const getCurrent = async(req, res)=> {
    const { id } = req.user
    try {
        const response = await userService.getCurrentUser(id)
        return res.status(200).json(response)
    } catch(e) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed get current user: ' + e
        })
    }
}

