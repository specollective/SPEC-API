const db = require('./models');

async function testSetup() {
	try {
		await db.sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}

module.exports = {
  testSetup,
}