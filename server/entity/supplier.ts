import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Part } from "./part";

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Part, p => p.supplier)
  parts!: Part[]
}