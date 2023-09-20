import db from '../models/index';
import { Op } from 'sequelize';

export const getUserPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;
        const { rows, count } = await db.User.findAndCountAll({
            attributes: [
                'firstName',
                'lastName',
                'username',
                'status',
                'phone',
            ],
            include: { model: db.Role, attributes: ['name'] },
            offset: offset,
            limit: limit,
        });

        let totalPage = Math.ceil(count / limit);
        let data = {
            totalRows: count,
            totalPage: totalPage,
            users: rows,
        };

        return {
            err: count ? 0 : 1,
            msg: count ? 'OK' : 'Failed to get current user.',
            data,
        };
    } catch (e) {
        return e;
    }
};

export const getUser = async () => {
    try {
        const response = await db.User.findAll({
            attributes: [
                'id',
                'firstName',
                'lastName',
                'username',
                'status',
                'phone',
            ],
            include: { model: db.Role, attributes: ['name'] },
            where: { roleId: { [Op.notIn]: [1] } },
        });

        return {
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to get list user.',
            response,
        };
    } catch (e) {
        return e;
    }
};
