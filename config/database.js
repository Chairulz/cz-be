import { Sequelize } from "sequelize";

const db = new Sequelize("notes_db", "root", "tcc123", {
    host: "34.31.36.44",
    dialect: "mysql"
});

export default db;