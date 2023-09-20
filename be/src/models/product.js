'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Category, OrderDetail, Rate }) {
            // define association here
            this.belongsTo(Category, { foreignKey: 'categoryId' })
            this.hasMany(OrderDetail, { foreignKey: 'productId' })
            this.hasMany(Rate, { foreignKey: 'productId '})
        }
    }
    Product.init({
        name: DataTypes.STRING,
        price: DataTypes.FLOAT,
        discount: DataTypes.FLOAT,
        unit: DataTypes.STRING,
        description: DataTypes.TEXT('long'),
        images: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        quantity: DataTypes.INTEGER,
        giftContent: DataTypes.TEXT,
        slug: DataTypes.STRING,
        categoryId: DataTypes.INTEGER
    }, {
        
        sequelize,
        modelName: 'Product',
    });
    return Product;
};