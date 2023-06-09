import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, OneToOne, ManyToOne } from "typeorm";
import { Place } from "./place.entity";
import { Schedule } from "./schedule.entity";
import { Type } from "./type.entity";
import { Item } from "./item.entity";
import { format } from 'date-fns';


@Entity({
    name: "reserves"
})
export class Reserve {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=> Item, item => item.reserves )
    item: Item

    @Column()
    client_id: number;

    @Column()
    available: boolean = false;

    @Column({nullable:true})
    start_time: string;

    @Column({nullable:true})
    end_time: string;

    @Column({nullable:true})
    start_date: string = format(new Date(), 'yyyy-MM-dd');
    
    @Column({nullable:true})
    end_date: string;

    @Column({nullable:true})
    cancelled: boolean = false;

    @Column({nullable:true})
    pending: boolean = true;

    // @OneToMany(() => Place, place => place.institution)
    // places: Place[];

}
