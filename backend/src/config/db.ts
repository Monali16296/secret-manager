import { Sequelize } from 'sequelize';
import path from 'path';

const dbFile = path.resolve(__dirname, '../data/secrets.sqlite');

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbFile,
  logging: false,
}); 