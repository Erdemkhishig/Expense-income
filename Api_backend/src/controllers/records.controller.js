

const { db } = require('../database/index.js');
const { records } = require('../database/schema.js');

const getAllRecords = async (req, res) => {
    const recordData = await db.query.records.findMany({
        // with: {
        //     category: true,
        // },
    });
    res.json(recordData)
};

const createRecord = async (req, res) => {
    const { newRecords } = req.body;
    console.log(newRecords, "---");

    // const { id, name, amount, userId, time, date, categoryId, payee, note, status } = req.body;
    const { amount, userId, time, date, categoryId, payee, note, status } = newRecords;

    const createdRecord = await db
        .insert(records)
        .values({ amount, userId, time, date, categoryId, payee, note, status })
        .returning();

    res.json(createdRecord);
};

const deleteRecord = async (req, res) => {
    // Extract the record ID from the request parameters (assuming it is passed in the URL)
    const { id } = req.params;

    try {
        // Perform the deletion
        const result = await db
            .deleteFrom(records)
            .where(records.id.equals(id))
            .execute();

        // Check if any row was deleted
        if (result.rowCount === 0) {
            // If no rows were affected, send a 404 response
            return res.status(404).json({ message: 'Record not found' });
        }

        // Send a success response
        res.json({ message: 'Record deleted successfully' });
    } catch (error) {
        // Handle any errors that occur during the operation
        console.error('Error deleting record:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



module.exports = { getAllRecords, createRecord, deleteRecord };
