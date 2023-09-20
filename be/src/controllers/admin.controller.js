import * as adminService from '../services/admin.service';

export const getUser = async (req, res) => {
    try {
        if (req.query.page && req.query.limit) {
            let { page, limit } = req.query;
            console.log('Check page, limit :', page, limit);
            const response = await adminService.getUserPagination(+page, +limit);
            return res.status(200).json(response);
        } else {
            const response = await adminService.getUser();
            return res.status(200).json(response);
        }
    } catch (e) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed get list user: ' + e,
        });
    }
};
