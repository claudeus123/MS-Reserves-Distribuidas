import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Institution } from "./institution.entity";
import { Item } from "./item.entity";


@Entity({
    name: "places"
})
export class Place {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    city: string;
    
    @ManyToOne(() => Institution, institution => institution.places)
    institution: Institution;

    @OneToMany(() => Item, item => item.place)
    items: Item[]
 
}
