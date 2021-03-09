const Sequelize = require('sequelize');
const sequelize = new Sequelize('auto-glass-depot', 'postgres', process.env.PASS,
{
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(
    function() {
        console.log('Connected to autoGlassDepot');
    },
    err => {console.log(err)}
    )
    .catch(err => console.log(err))

    customer = sequelize.import('./models/customerModel');

    module.exports = sequelize;