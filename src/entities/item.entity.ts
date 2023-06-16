import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Institution } from "./institution.entity";
import { Place } from "./place.entity";
import { Type } from "./type.entity";
import { Reserve } from "./reserves.entity";


@Entity({
    name: "items"
})
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @OneToMany(()=> Reserve, reserve => reserve.item)
    reserves: Reserve[];

    @Column()
    description: string;

    @Column({nullable: true})
    price: number = 0;

    @ManyToOne(() => Place, place => place.items)
    place: Place;

    @ManyToOne(() => Type)
    type: Type;

    
}
