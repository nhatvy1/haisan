import sequelize from 'sequelize';
import db from '../models/index';
import bigDecimal from 'js-big-decimal';

export const buy = (data) =>
    new Promise(async (resolve, reject) => {
        try {
            const { cartList, user } = data;

            // create order
            const newOrder = await db.Order.create({
                status: 'Đã đặt hàng',
                shipAddress: 'Sài Gòn',
                attribute: 1,
                paymentId: null,
                userId: user.id,
            });

            // create order detail
            for (let c of cartList) {
                // console.log('Check c: ', bigDecimal.multiply(c.price, c.quantity));
                await db.OrderDetail.create({
                    productName: c.name,
                    quantity: c.quantity,
                    unitPrice: bigDecimal.multiply(c.price, c.quantity),
                    productId: c.id,
                    orderId: newOrder.id,
                });
            }

            resolve({
                err: 0,
                msg: 'Đặt hàng thành công',
            });
        } catch (e) {
            reject(e);
        }
    });

export const getOrder = async (user) => {
    try {
        const response = await db.Order.findAll({
            duplicating: true,
            attributes: [
                'id',
                'status',
                'shipAddress',
                'userId',
                [sequelize.fn('SUM', sequelize.col('OrderDetails.unitPrice')), 'TotalQuantity']
            ],
            where: { userId: user.id },
            include: [
               { model: db.OrderDetail, as: 'OrderDetails' }
            ],
            group: 'Orderdetails.id',
            logging: console.log
        });

        return {
            err: response ? 0 : 1,
            msg: response
                ? 'Get a list of successfully ordered'
                : 'Get a list of failure orders',
            response,
        };
    } catch (e) {
        return e;
    }
};
