import { DataTypes } from "sequelize";
import { dbConnector } from "./conn";

export const Client = dbConnector.define("clients", {
  userGarminLogin: { type: DataTypes.STRING, field: "user_garmin_login" },
  userGarminHashedPassword: { type: DataTypes.STRING },
  salt: {
    type: DataTypes.STRING,
    field: "salt",
  },
});
