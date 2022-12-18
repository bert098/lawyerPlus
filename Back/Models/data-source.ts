import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    migrationsTableName: 'migrations',
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "hello123",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [
        "migration/**/*{.js,.ts}"
     ],
    subscribers: [
        "src/subscriber/**/*{.js,.ts}"
     ],
})
AppDataSource.initialize().then(async () => {
    console.log("Data Source has been initialized!")
    AppDataSource.synchronize()
}).catch(error => console.log(error))  
