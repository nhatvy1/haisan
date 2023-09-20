import * as orderService from '../services/order.service';

export const order = async(req, res)=> {
    const data = req.body;
    try {
        const response = await orderService.buy(data)
        return res.status(200).json({ response })
    } catch(e) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at order controller: ' + e,
        })
    }
}

export const getOrder = async(req, res)=> {
    try {
        const user = req.user;
        const response = await orderService.getOrder(user);
        return res.status(200).json({ response });
    } catch(e) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at order controller: ' + e,
        })
    }
}