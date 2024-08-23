
const { Router } = require("express");

const { getAllRecords, createRecord, deleteRecord } = require('../controllers/records.controller')

const recordRouter = Router();

recordRouter.get("/", getAllRecords);
recordRouter.post("/", createRecord);
recordRouter.delete("/:id", deleteRecord);

module.exports = { recordRouter };
