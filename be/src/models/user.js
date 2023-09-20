'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Order, Payment, Address, Rate, Role}) {
            // define association here
            this.hasMany(Order, { foreignKey: 'userId' })
            this.hasMany(Payment, { foreignKey: 'paymentId' })
            this.hasMany(Address, { foreignKey: 'userId' })
            this.hasMany(Rate, { foreignKey: 'userId' })
            this.belongsTo(Role, { foreignKey: 'roleId' })
        }
    }
    User.init(
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            status: DataTypes.BOOLEAN,
            avatar: DataTypes.STRING,
            phone: DataTypes.STRING,
            roleId: DataTypes.INTEGER
        },
        {
            sequelize,
            modelName: 'User',
        },
    );
    return User;
};
