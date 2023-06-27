import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { KitProduct } from "./KitProduct";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  SKU: string;

  @Column()
  name: string;

  @Column("decimal")
  price: number;

  @OneToMany(() => KitProduct, (kitProduct) => kitProduct.product)
  kitProducts: KitProduct[];
}
