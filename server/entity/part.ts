import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Supplier } from "./supplier";

@Entity()
export class Part {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @ManyToOne(() => Supplier, s => s.parts)
  supplier!: Supplier;

  @Column()
  externalRef!: string;

  @Column()
  externalUrl!: string;

  @Column()
  price!: string;
}