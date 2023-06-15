import { Type } from "src/entities/type.entity";

export class CreateScheduleDto {
    name: string;

    start_time?: string;

    end_time?: string;

    day_quantity?: number;
}
