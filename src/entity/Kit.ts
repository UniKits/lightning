import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { KitProduct } from "./KitProduct";

@Entity()
export class Kit {
  @PrimaryGeneratedColumn()
  declare id: number;

  @Column()
  declare name: string;

  @OneToMany(() => KitProduct, (kitProduct) => kitProduct.kit)
  declare kitProducts: KitProduct[];
}
