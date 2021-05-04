const { DataTypes } = require("sequelize");
import db from "../config/database";

export type Item = {
  name: String;
  slug: String;
  price: number;
  currentQty: number;
  defaultQty: number;
  maxQty?: number;
};

const Schema = db().define("Item", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  currentQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  defaultQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  maxQty: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

db().sync();

export default Schema;
