import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Kit } from "./Kit";
import { Product } from "./Product";

@Entity()
export class KitProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  displayName: string;

  @Column('boolean')
  visible: boolean;

  @ManyToOne(() => Kit, (kit) => kit.kitProducts)
  kit: Kit;

  @ManyToOne(() => Product, (product) => product.kitProducts)
  product: Product;
}
