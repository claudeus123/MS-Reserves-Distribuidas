import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Institution } from "./institution.entity";
import { Place } from "./place.entity";


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
    price: number;

    @ManyToOne(() => Place, place => place.items)
    place: Place;


}
