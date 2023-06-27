import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Kit } from "./Kit";
import { Product } from "./Product";

@Entity()
export class KitProduct {
  @PrimaryGeneratedColumn()
  declare id: number;

  @Column()
  declare displayName: string;

  @Column('boolean')
  declare visible: boolean;

  @ManyToOne(() => Kit, (kit) => kit.kitProducts)
  declare kit: Kit;

  @ManyToOne(() => Product, (product) => product.kitProducts)
  declare product: Product;
}
