'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('StationBikes', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },
            stationId: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            dockNumber: {type: Sequelize.INTEGER},
            isElectric: {type: Sequelize.BOOLEAN},
            isAvailable: {type: Sequelize.BOOLEAN},
            battery: {type: Sequelize.FLOAT},
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('StationBikes');
    }
};
