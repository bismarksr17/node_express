const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const createTimeBlocksService = async (startTime, endTime) => {
    
    const newTimeBlock = await prisma.timeBlock.creare({
        data: {
            startTime : new Date(startTime),
            endTime : new Date(endTime)
        }
    });
    return newTimeBlock;
}

const listReservationsService = async () => {
    const reservations = await prisma.Appointment.findMany({
        include : {
            user: true,
            timeBlock: true
        }
    });
    return reservations;
};

module.exports = { createTimeBlocksService, listReservationsService };