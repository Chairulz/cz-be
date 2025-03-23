import Note from "../model/model.js";

export const getNotes = async (req, res) => {
    try {
        const response = await Note.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createNote = async (req, res) => {
    try {
        await Note.create(req.body);
        res.status(201).json({ msg: "Note Created" });
    } catch (error) {
        console.log(error.message);
    }
};

// UPDATE
export const updateNote = async (req, res) => {
    try {
        await Note.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Note updated successfully" });
    } catch (error) {
        console.log(error.message);
    }
};

// DELETE
export const deleteNote = async (req, res) => {
    try {
        await Note.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Note deleted successfully" });
    } catch (error) {
        console.log(error.message);
    }
};