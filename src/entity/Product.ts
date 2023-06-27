import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { KitProduct } from "./KitProduct";
import { Supplier } from "./Supplier";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  declare id: number;

  @Column()
  declare SKU: string;

  @Column()
  declare name: string;

  @Column("decimal", { precision: 10, scale: 2})
  declare price: number;

  @ManyToOne(() => Supplier, (supplier) => supplier.products)
  declare supplier: KitProduct[];

  @OneToMany(() => KitProduct, (kitProduct) => kitProduct.product)
  declare kitProducts: KitProduct[];
}
