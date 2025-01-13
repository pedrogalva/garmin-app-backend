import { Router } from "express";
import { Op } from "sequelize";
import { Client } from "../db";

const dbRouter = Router();

dbRouter.get("/user/:id", async (req, res) => {
  Client.findAll({
    where: {
      authorId: {
        [Op.eq]: req.params.id,
      },
    },
  });
});
