const pool = require('../../db');
const queries = require('./queries');

const getSteelers = (req, res) => {
    //pool.query("SELECT * FROM steelers", (error, results) => {
    pool.query(queries.getSteelers, (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows);
    })       
};

const getSteelersByNumber = (req, res) => {
    const number = parseInt(req.params.number);
    pool.query(queries.getSteelersByNumber,[number], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows)
    });
};

const addSteelers = (req, res) => {
    const { number, position, name } = req.body;
    pool.query(queries.checkNumberExists, [number], (error, results) => {
        if (error) throw error;
        
        if (results.rows.length) {
            return res.status(400).send("Number is already in use by an existing player");
        }

        const insertQuery = "INSERT INTO steelers (number, position, name) VALUES ($1, $2, $3)";
        pool.query(insertQuery, [number, position, name], (error, results) => {
            if (error) throw error;
            res.status(201).send("Player added successfully");
        });
    });
};

const deleteSteeler = (req, res) => {
    const number = parseInt(req.params.number);
    pool.query(queries.deleteSteelerByNumber, [number], (error, results) => {
        if (error) throw error;
        
        if (results.rowCount === 0) {
            return res.status(404).send("Player with this number not found");
        }

        res.status(200).send("Player deleted successfully");
    });
};

const updateSteeler = (req, res) => {
    const number = parseInt(req.params.number);
    const { position, name } = req.body;

    if (!position || !name) {
        return res.status(400).send("Position and Name are required.");
    }

    pool.query(queries.updateSteelerByNumber, [position, name, number], (error, results) => {
        if (error) throw error;

        if (results.rowCount === 0) {
            return res.status(404).send("Player with this number not found");
        }

        res.status(200).send("Player updated successfully");
    });
};

module.exports = {
    getSteelers,
    getSteelersByNumber,
    addSteelers,
    deleteSteeler,
    updateSteeler,
};