import { Sequelize } from "sequelize";

export const dbConnector = new Sequelize("sqlite::memory:");
