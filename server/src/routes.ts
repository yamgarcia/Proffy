import express, { response } from 'express';

const routes = express.Router();

routes.post("/classes", (req, res) => {

    const {
        name, avatar, whatsapp, bio, cost, subject, schedule
    } = req.body;

    console.log([name, avatar, whatsapp, bio, cost, subject, schedule])

    return res.send();

  });

export default routes;