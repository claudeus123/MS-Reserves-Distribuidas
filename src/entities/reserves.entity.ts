import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, OneToOne } from "typeorm";
import { Place } from "./place.entity";
import { Schedule } from "./schedule.entity";
import { Type } from "./type.entity";
import { Item } from "./item.entity";


@Entity({
    name: "reserves"
})
export class Reserve {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Item)
    @JoinColumn()
    item: Item

    @Column()
    client_id: number;

    @Column()
    available: boolean = false;

    @Column()
    start_time: string;

    @Column()
    end_time: string;

    @Column()
    start_date: string;
    
    @Column()
    end_date: string;

    // @OneToMany(() => Place, place => place.institution)
    // places: Place[];

}
