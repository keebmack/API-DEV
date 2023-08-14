const getSteelers = "SELECT * FROM steelers";
const getSteelersByNumber = "SELECT * FROM steelers WHERE number = $1";
const checkNumberExists = "SELECT * FROM steelers WHERE number = $1";
const deleteSteelerByNumber = "DELETE FROM steelers WHERE number = $1";
const updateSteelerByNumber = "UPDATE steelers SET position = $1, name = $2 WHERE number = $3";

module.exports = {
    getSteelers,
    getSteelersByNumber,
    checkNumberExists,
    deleteSteelerByNumber,
    updateSteelerByNumber,
};