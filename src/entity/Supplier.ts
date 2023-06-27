import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Product } from "./Product";

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn()
  declare id: number;

  @Column()
  declare name: string;

  @OneToMany(() => Product, (product) => product.supplier)
  declare products: Product[];
}
