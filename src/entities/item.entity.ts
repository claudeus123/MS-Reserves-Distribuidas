import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Institution } from "./institution.entity";
import { Place } from "./place.entity";
import { Type } from "./type.entity";


@Entity({
    name: "items"
})
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    description: string;

    @Column({nullable: true})
    price: number = 0;

    @ManyToOne(() => Place, place => place.items)
    place: Place;

    @OneToOne(() => Type)
    @JoinColumn()
    type: Type;

    
}
