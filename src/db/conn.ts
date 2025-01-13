import { Sequelize } from "sequelize";

export const sequelizeConn = new Sequelize("sqlite::memory:");
