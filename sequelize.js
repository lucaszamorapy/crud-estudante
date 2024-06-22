// sequelize.js

import { Sequelize } from "sequelize";

const sequelize = new Sequelize("crud_estudantes", "root", "123", {
  host: "localhost",
  dialect: "mysql",
  logging: false, // Desative isto se não quiser logs do SQL
});

export default sequelize;
