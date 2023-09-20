'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ User, OrderDetail, Payment }) {
            // define association here
            this.belongsTo(User, { foreignKey: 'userId' })
            this.hasMany(OrderDetail, { foreignKey: 'orderId' })
            this.belongsTo(Payment, { foreignKey: 'paymentId'})
        }
    }
    Order.init(
        {
            status: DataTypes.STRING,
            shipAddress: DataTypes.STRING,
            attribute: DataTypes.INTEGER,
            userId: DataTypes.INTEGER,
            paymentId: DataTypes.INTEGER
        },
        {
            sequelize,
            modelName: 'Order',
        },
    );
    return Order;
};
