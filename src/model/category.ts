import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Car} from "./car";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    idCategory: number;
    @Column({type: "varchar", length: 255})
    nameCategory: string;
    @OneToMany(()=>Car, (car: Car)=> car.categoryId)
    cars: Car[];
}