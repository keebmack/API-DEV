const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "ryank",
    password: "ryankebe",
    port: 5432,
});

module.exports = pool;