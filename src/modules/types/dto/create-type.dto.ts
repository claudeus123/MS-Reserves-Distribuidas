import { Schedule } from "src/entities/schedule.entity";

export class CreateTypeDto {
    name: string;
    default_image?: string;
    schedules?: Schedule[];
}
