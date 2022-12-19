const db = require('../../models')
const { getIndegoData } = require("./getDataFromIndego");

const updateIndegoData = async () => {
    try {

        getIndegoData.then((data) => {
            console.log(JSON.stringify(data))
            const features = data.features;

            features.forEach(async (feature) => {
                const properties = feature.properties;
                const geometry = feature.geometry;

                const coordinates = geometry.coordinates;
                const latitude = coordinates[1];
                const longitude = coordinates[0];

                const name = properties.name;
                const id = properties.id;

                const bikes = properties.bikes;
                await Promise.all([
                    createStation(id, name, latitude, longitude),
                    createStationAvailableBikes(id, bikes),
                    createStationStatus(id, properties)
                ])
            });
        });
    } catch (error) {
        console.log(error);
        throw error;
    }

}

const createStation = async (stationId, name, latitude, longitude) => {
    try {
        const station = await db.Station.findOrCreate({
            where: { id: stationId },
            defaults: {
                name,
                latitude,
                longitude,
            },
        });

        return station;

    } catch (error) {
        console.log(error);
        throw error;
    }

}

const createStationStatus = async (stationId, properties) => {
    try {
        const {
            totalDocks,
            docksAvailable,
            bikesAvailable,
            classicBikesAvailable,
            smartBikesAvailable,
            electricBikesAvailable,
            rewardBikesAvailable,
            rewardDocksAvailable,
            kioskStatus,
            kioskPublicStatus,
            kioskConnectionStatus,
            kioskType,
            addressStreet,
            addressCity,
            addressState,
            addressZipCode
        } = properties;
        const stationStatus = await db.StationStatus.create({
            stationId,
            totalDocks,
            docksAvailable,
            bikesAvailable,
            classicBikesAvailable,
            smartBikesAvailable,
            electricBikesAvailable,
            rewardBikesAvailable,
            rewardDocksAvailable,
            kioskStatus,
            kioskPublicStatus,
            kioskConnectionStatus,
            kioskType,
            addressStreet,
            addressCity,
            addressState,
            addressZipCode,
        })
        return stationStatus;
    } catch (error) {
        console.log(error);
        throw error;
    }

}

const createStationAvailableBikes = async (stationId, bikes) => {
    try {
        bikes.forEach(async (bike) => {
            const {
                dockNumber,
                isElectric,
                isAvailable,
                battery,
            } = bike;
            await db.StationBike.create({
                stationId,
                dockNumber,
                isElectric,
                isAvailable,
                battery,
            })
        });
        return bikes;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { updateIndegoData };
