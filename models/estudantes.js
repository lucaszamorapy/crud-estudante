// models/estudante.js

import { DataTypes, Model } from "sequelize";
import sequelize from "../sequelize.js";

class Estudante extends Model {}

Estudante.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    sobrenome: {
      type: DataTypes.STRING,
    },
    nota_1: {
      type: DataTypes.DECIMAL(5, 2),
    },
    nota_2: {
      type: DataTypes.DECIMAL(5, 2),
    },
    nota_final: {
      type: DataTypes.VIRTUAL,
      get() {
        const nota1 = parseFloat(this.getDataValue("nota_1"));
        const nota2 = parseFloat(this.getDataValue("nota_2"));
        // Calcula a média das notas
        if (!isNaN(nota1) && !isNaN(nota2)) {
          return (nota1 + nota2) / 2;
        }
        return null;
      },
    },
  },
  {
    sequelize,
    modelName: "estudante",
    timestamps: false,
  }
);

export default Estudante;
