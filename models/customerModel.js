module.exports = function(sequelize, DataTypes) {
    const Customer = sequelize.define('customer', {
        first: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false
        },
        last: {
            type: DataTypes.STRING,
            allowNull: false,
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
            allowNull: true,
            unique: false
        },
        carModel: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: true,
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