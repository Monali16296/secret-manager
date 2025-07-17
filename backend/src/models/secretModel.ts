import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/db';

interface SecretAttributes {
  id: string;
  secretText: string;
  used: number;
  createdAt: string;
  viewedAt?: string | null;
}

interface SecretCreationAttributes extends Optional<SecretAttributes, 'used' | 'viewedAt'> {}

export class Secret extends Model<SecretAttributes, SecretCreationAttributes> implements SecretAttributes {
  public id!: string;
  public secretText!: string;
  public used!: number;
  public createdAt!: string;
  public viewedAt?: string | null;
}

Secret.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    secretText: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    used: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    createdAt: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    viewedAt: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'secrets',
    timestamps: false,
  }
); 