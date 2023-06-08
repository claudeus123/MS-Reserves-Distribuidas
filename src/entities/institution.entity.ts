import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { Place } from "./place.entity";


@Entity({
    name: "institutions"
})
export class Institution {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Place, place => place.institution)
    places: Place[];

    
    
}
