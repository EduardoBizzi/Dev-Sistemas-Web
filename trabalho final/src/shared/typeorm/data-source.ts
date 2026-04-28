import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "path";
import Livro from "../../modules/livro/typeorm/entities/Livro";

export const AppDataSource = new DataSource({
 type: "postgres",
 host: "localhost",
 port: 5433,
 username: "postgres",
 password: "docker",
 database: "livros",
 synchronize: true, // ⚠ apenas em desenvolvimento
 logging: false,
 entities: [Livro],
 migrations: [path.join("src", "shared", "typeorm", "migrations", "*.ts")],
 subscribers: [],
});