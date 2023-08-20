const Pool = require("pg").Pool;

const pool = new Pool({
    user: "ryankebe",
    host: "dpg-cjh8qhr6fquc73dsl3sg-a",
    database: "kebe",
    password: "7fyy90iGOgEgCrDYUdjauHipMrYAMwoH",
    port: 6002,
});

module.exports = pool;