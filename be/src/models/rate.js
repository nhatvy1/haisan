'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Rate extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Product, User }) {
            // define association here
            this.belongsTo(Product, { foreignKey: 'productId' })
            this.belongsTo(User, { foreignKey: 'userId' })
        }
    }
    Rate.init({
        content: DataTypes.TEXT,
        like: DataTypes.INTEGER,
        disLike: DataTypes.INTEGER,
        productId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Rate',
    });
    return Rate;
};