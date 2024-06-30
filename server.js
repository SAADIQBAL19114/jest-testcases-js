const app = require('./index');
const { sequelize } = require('./src/models');

app.listen(2000, async () => {
  console.log(
    `Library management system backend(server) listening at http://localhost:2000`,
  );
  await sequelize.authenticate();
  console.log('Database connected!');
});
