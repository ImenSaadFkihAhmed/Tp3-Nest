import { CvEntity } from "../../cv/entities/cv.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";

@Entity('skill')
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  designation: string;

  @ManyToMany(
    type=>CvEntity,
    (cv)=>cv.skills,

 )


@JoinTable()
cvs:CvEntity[]
}



