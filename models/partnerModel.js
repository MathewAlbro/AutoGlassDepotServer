module.exports = function(sequelize, DataTypes) {
    const Partner = sequelize.define
    ('partner', {
        insuranceCompany: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        agency: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        policyHolder: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        policyNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        dateOfLoss: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        policyHolderPhone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        policyHolderZipCode: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        deductible: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        yearMakeModel: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        vinNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        }

    })
    return Partner
}