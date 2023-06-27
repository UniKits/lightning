import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { KitProduct } from "./KitProduct";

@Entity()
export class Kit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => KitProduct, (kitProduct) => kitProduct.kit)
  kitProducts: KitProduct[];
}
