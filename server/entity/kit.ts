import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Project } from "./project";

@Entity()
export class Kit {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
  
  @Column()
  description!: string;

  @Column()
  suggested_price!: number;

  @ManyToOne(() => Project, p => p.kits)
  project!: Project;

  @Column()
  wc_id!: string;
}