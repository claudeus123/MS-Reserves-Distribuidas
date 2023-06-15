import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { Place } from "./place.entity";
import { Reserve } from "./reserves.entity";
import { Type } from "./type.entity";


@Entity({
    name: "schedule"
})
export class Schedule {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    start_time: string;

    @Column({nullable: true})
    end_time: string;

    @Column()
    day_quantity: number = 0;

    @ManyToOne(() => Type, type => type.schedules)
    type: Type

    // ManyToOne(() => Place, place => place.items)
    // place: Place;
}
