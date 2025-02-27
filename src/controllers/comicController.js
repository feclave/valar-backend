import comic from "../models/Comic.js";

class ComicController {

    static async getComics(req, res) {
        try {
            const getComics = await comic.find({});
            res.status(200).json(getComics);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to get images.` });
        }
    }

    static async getComicsById(req, res) {
        try {
            const id = req.params.id;
            const foundComic = await comic.findById(id);
            res.status(200).json(foundComic)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to search image by id.` });
        }
    };

    static async postComic(req, res) {
        try {
            const newComic = await comic.create(req.body);
            res.status(201).json({ message: "Sucessfully inserted a new image!", comic: newComic });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to insert new image.` });
        }
    };

    static async patchComic(req, res) {
        try {
            const id = req.params.id;
            await comic.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Image updated!" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to update the image.` })
        }
    }

    static async deleteComic(req, res) {
        try {
            const id = req.params.id;
            await comic.findByIdAndDelete(id);
            res.status(200).json({message: "Sucessfully deleted the image!"});
        } catch (error) {
            res.status(500).json({message:`${error.message} - failed to delete the image.`});

        }
    };

};

export default ComicController


