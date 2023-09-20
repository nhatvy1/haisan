const Sequelize = require('sequelize');

const sequelize = new Sequelize('daohaisan', 'root', '', {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
  });

const connectionDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default connectionDb