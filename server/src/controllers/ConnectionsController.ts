import { Request as req, Response as res, response } from "express";
import db from "../database/connection";

export default class ConnectionsController {
  //list all connections
  async index(req: req, res: res) {
    const totalConnections = await db("connections").count("* as total");

    //Every instruction executed on Knex return an array so even if it's one line it must specifcaly look for the first [0]
    const { total } = totalConnections[0];

    return res.json({ total });
  }

  //create connections
  async create(req: req, res: res) {
    const { user_id } = req.body;

    await db("connections").insert({
      user_id,
    });

    //201 is used whenever something is created on the backend
    return res.status(201).send();
  }
}
