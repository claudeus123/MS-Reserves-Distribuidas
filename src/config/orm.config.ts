import { DataSourceOptions } from "typeorm";
import { ConfigModule } from "@nestjs/config";
import { DataSource } from "typeorm";
import { Institution } from "../entities/institution.entity";
import { Item } from "../entities/item.entity";
import { Place } from "../entities/place.entity";
import { Schedule } from "../entities/schedule.entity";
import { Reserve } from "../entities/reserves.entity";
import { Type } from "../entities/type.entity";



ConfigModule.forRoot({
    envFilePath : ".env",
    isGlobal : true
})

const DatabaseConfig: DataSourceOptions = {
    type: process.env.TYPEORM_CONNECTION as any,
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT as string),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: process.env.TYPEORM_SYNCHRONIZE === "true",
    logging: process.env.TYPEORM_LOGGING === "true",
    entities: [Institution, Item, Place, Reserve, Schedule, Type],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
}

class DataSourceFactory {
    private constructor(){}

    static createDataSource(): DataSourceOptions{
        return DatabaseConfig
    }
}

const DataSourceConfig = DataSourceFactory.createDataSource();
export { DataSourceConfig };

export const AppDS = new DataSource(DataSourceConfig);