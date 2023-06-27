import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { KitProduct } from "./KitProduct";
import { Supplier } from "./Supplier";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  SKU: string;

  @Column()
  name: string;

  @Column("decimal", { precision: 10, scale: 2})
  price: number;

  @ManyToOne(() => Supplier, (supplier) => supplier.products)
  supplier: KitProduct[];

  @OneToMany(() => KitProduct, (kitProduct) => kitProduct.product)
  kitProducts: KitProduct[];
}
