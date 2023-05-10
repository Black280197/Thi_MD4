import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Category} from "./category";

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "varchar", length: 255})
    name: string;
    @Column({type: "int"})
    code: number;
    @Column({type: "int"})
    price: number;
    @Column({type: "text"})
    description: string;
    @ManyToOne(()=> Category, (category: Category)=> category.cars)
    categoryId: number;
}