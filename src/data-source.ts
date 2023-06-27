import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "admin",
  password: "8WrDtZmVLsaN7DMT84mM8E",
  database: "unikits",
  logging: true,
  synchronize: true,
  entities: ["src/entity/*.ts"],
  subscribers: [],
  migrations: [],
});
