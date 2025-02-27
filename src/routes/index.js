import express from "express";
import comics from "./comicsRoutes.js";

const routes = (app) => {
    app.use(express.json());

    app.route ("/").get((req,res) => res.status(200).send ("Valar Database"));

    app.use(comics);

};

export default routes