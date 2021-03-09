module.exports = function(sequelize, DataTypes) {
    const Customer = sequelize.define('customer', {
        first: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false
        },
        last: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        carMake: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        carModel: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
        },
        insurance: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false
        }, 
        comments: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false
        }

    })
    return Customer
}