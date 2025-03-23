import { Sequelize } from "sequelize";
import db from "../config/database.js";

const Note = db.define("notes", {
    title: Sequelize.STRING,
    content: Sequelize.TEXT
}, {
    freezeTableName: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
});

export default Note;

(async () => {
    await db.sync();
})();
