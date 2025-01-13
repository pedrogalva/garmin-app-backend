import { DataTypes } from "sequelize";
import { sequelizeConn } from "./conn";

const Client = sequelizeConn.define("clients", {
  userGarminLogin: { type: DataTypes.STRING, field: "user_garmin_login" },
  userGarminHashedPassword: { type: DataTypes.STRING },
  salt: {
    type: DataTypes.STRING,
    field: "salt",
  },
});
