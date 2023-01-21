const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('spec-db', 'jtorreggiani', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

async function testSetup() {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}

module.exports = {
  testSetup,
}