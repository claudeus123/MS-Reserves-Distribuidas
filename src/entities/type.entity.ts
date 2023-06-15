import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { Place } from "./place.entity";
import { Schedule } from "./schedule.entity";


@Entity({
    name: "types"
})
export class Type {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    default_image: string;

    @OneToMany(() => Schedule, schedule => schedule.type)
    schedules: Schedule[];
    

}
