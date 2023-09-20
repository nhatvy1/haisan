import db from '../models';

export const getCurrentUser = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await db.User.findOne({
                where: { id },
                raw: true,
                attributes: {
                    exclude: ['password'],
                },
            });
            resolve({
                err: response ? 0 : 1,
                msg: response ? 'OK' : 'Failed to get current user.',
                response,
            });
        } catch (e) {
            reject(e);
        }
    });


