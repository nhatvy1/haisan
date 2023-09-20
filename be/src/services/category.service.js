import db from "../models"

export const getCategoriesService = ()=> 
    new Promise(async(resolve, reject)=> {
        try {
            const response = await db.Category.findAll({
                raw: true
            })
            resolve({
                err: response ? 0 : 1,
                msg: response ? 'OK' : 'Failed get categories.',
                response
            })
        } catch(e) {
            reject(e)
        }
    })