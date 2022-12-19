'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('StationStatuses', {
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
            totalDocks: {type: Sequelize.INTEGER},
            docksAvailable: {type: Sequelize.INTEGER},
            bikesAvailable: {type: Sequelize.INTEGER},
            classicBikesAvailable: {type: Sequelize.INTEGER},
            smartBikesAvailable: {type: Sequelize.INTEGER},
            electricBikesAvailable: {type: Sequelize.INTEGER},
            rewardBikesAvailable: {type: Sequelize.INTEGER},
            rewardDocksAvailable: {type: Sequelize.INTEGER},
            kioskStatus: {type: Sequelize.STRING},
            kioskPublicStatus: {type: Sequelize.STRING},
            kioskConnectionStatus: {type: Sequelize.STRING},
            kioskType: {type: Sequelize.STRING},
            addressStreet: {type: Sequelize.STRING},
            addressCity: {type: Sequelize.STRING},
            addressState: {type: Sequelize.STRING},
            addressZipCode: {type: Sequelize.STRING},
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
        await queryInterface.dropTable('StationStatuses');
    }
};
