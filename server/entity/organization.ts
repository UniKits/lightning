import {Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Project } from "./project";

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Project, p => p.organization)
  projects!: Project[];
}