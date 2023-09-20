import * as productService from '../services/product.service';

export const getProducts = async (req, res) => {
    try {
        const response = await productService.getProducts();
        return res.status(200).json(response);
    } catch (e) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at category controller: ' + e,
        });
    }
};

export const getProductsByCategory = async (req, res) => {
    try {
        if (req.query.page && req.query.limit && req.query.categoryId) {
            let { page, limit, categoryId } = req.query;
            const response = await productService.getProductsByCategory(
                +categoryId,
                +page,
                +limit,
            );
            return res.status(200).json(response);
        } else {
            const response = await productService.getProducts();
            return res.status(200).json(response);
        }
    } catch (e) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at product controller: ' + e,
        });
    }
};

export const getProductBestSelling = async (req, res) => {
    try {
        const response = await productService.getProductBestSelling();
        return res.status(200).json(response);
    } catch(e) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at product best selling controller: ' + e,
        });
    }
};

export const getProductDetail = async(req, res)=> {
    try {
        const { id } = req.query
        if (!id) {
            return res.status(400).json({
                err: 1,
                msg: 'Missing inputs',
            }); 
        }

        const response = await productService.getProductDetail(+id);
        return res.status(200).json(response);
    } catch(e) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at product best selling controller: ' + e,
        });
    }
}

export const addProduct = async (req, res) => {
    const data = req.body;
    const file = req.file;
    try {
        if (
            !data.name ||
            !data.price ||
            !data.discount ||
            !data.quantity ||
            !data.categoryId ||
            !data.unit
        ) {
            return res.status(400).json({
                err: 1,
                msg: 'Missing inputs',
            });
        }

        const response = await productService.addProduct(data, file);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at add product controller: ' + e,
        });
    }
};

export const upDateProduct = async (req, res) => {
    const data = req.body;
    const file = req.file;
    try {
        if (!data.id) {
            return res.status(400).json({
                err: 1,
                msg: 'Missing inputs',
            });
        }

        const response = await productService.updateProduct(data, file);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at update product controller: ' + e,
        });
    }
};

export const deleteProduct = async (req, res) => {
    const data = req.body;
    try {
        if (!data.id) {
            return res.status(400).json({
                err: 1,
                msg: 'Missing inputs',
            });
        }

        const response = await productService.deleteProduct(data);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at delete product controller: ' + e,
        });
    }
};
