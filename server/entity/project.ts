import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import { Kit } from "./kit";
import { Organization } from "./organization";

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @ManyToOne(() => Organization, o => o.projects)
  organization!: Organization

  @OneToMany(() => Kit, k => k.project)
  kits!: Kit[]
}