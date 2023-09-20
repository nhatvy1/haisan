import sequelize from 'sequelize';
import db from '../models/index';

export const getProducts = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await db.Product.findAll({
                raw: true,
            });
            resolve({
                err: response ? 0 : 1,
                msg: response ? 'OK' : 'Falied get products',
                response,
            });
        } catch (e) {
            reject(e);
        }
    });

export const getProductsByCategory = async (categoryId, page, limit) => {
    try {
        let offset = (page - 1) * limit;
        let { rows, count } = await db.Product.findAndCountAll({
            where: { categoryId: categoryId },
            offset: offset,
            limit: limit,
            order:[
                ["createdAt", "DESC"]
            ]
        });

        let totalPage = Math.ceil(count / limit);
        let data = {
            totalRows: count,
            totalPage: totalPage,
            products: rows,
        };

        return {
            err: count ? 0 : 1,
            msg: count
                ? 'Get product by category success'
                : 'Get product by categories failed',
            data: data,
        };
    } catch (e) {
        return e;
    }
};

export const getProductBestSelling = async () => {
    try {
        let response = await db.OrderDetail.findAll({
            attributes: [
                'productId',
                [sequelize.fn('SUM', sequelize.col('OrderDetail.quantity')), 'TotalQuantity']
            ],
            include: { model: db.Product },
            group: 'productId',
            order: sequelize.literal('TotalQuantity DESC'),
            limit: 5,
            nest: true,
            raw: true,
        });

        return {
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed get order details',
            response,
        };
    } catch (e) {
        return e;
    }
};

export const getProductDetail = async(id)=> {
    try {
        const response = await db.Product.findOne({
            where: { id: id}
        })

        return {
            err: response ? 0 : 1,
            msg: response
                ? 'Get product detail success'
                : 'Get product detail failed',
            response
        };
    } catch(e) {
        return e
    }
}

export const addProduct = async (data, file) => {
    try {
        const product = await db.Product.create({
            name: data.name,
            price: data.price,
            discount: data.discount,
            unit: data.unit,
            description: data.description,
            images: file ? file.path : null,
            status: 1,
            quantity: data.quantity,
            giftContent: data.giftContent,
            slug: data.slug,
            categoryId: data.categoryId,
        });

        return {
            err: product ? 0 : 1,
            msg: product ? 'Add product success' : 'Add product failed',
        };
    } catch (e) {
        return e;
    }
};

export const updateProduct = async (data, file) => {
    try {
        const product = await db.Product.findOne({
            where: { id: data.id },
        });

        if (product) {
            product.name = data.name;
            product.description = data.description;

            // neu có product.image thi gan lai
            product.images = file ? file.path : null;
            await product.save();

            return {
                err: 0,
                msg: 'Update product success',
            };
        } else {
            return {
                err: 1,
                msg: 'Update product fail',
            };
        }
    } catch (e) {
        return e;
    }
};

export const deleteProduct = async (data) => {
    try {
        const deleteProduct = await db.Product.destroy({
            where: { id: data.id },
            force: true,
        });

        return {
            err: deleteProduct ? 0 : 1,
            msg: deleteProduct
                ? 'Delete product success'
                : 'Delete product fail',
        };
    } catch (e) {
        return e;
    }
};
