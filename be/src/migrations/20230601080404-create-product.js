'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            price: {
                type: Sequelize.FLOAT,
            },
            discount: {
                type: Sequelize.FLOAT,
            },
            unit: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.TEXT('long'),
            },
            images: {
                type: Sequelize.STRING,
            },
            status: {
                type: Sequelize.BOOLEAN,
            },
            quantity: {
                type: Sequelize.INTEGER,
            },
            giftContent: {
                type: Sequelize.TEXT,
            },
            slug: {
                type: Sequelize.STRING,
            },
            categoryId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Categories',
                    key: 'id',
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Products');
    },
};
