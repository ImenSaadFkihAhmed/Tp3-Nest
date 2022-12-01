import { Skill } from "../../skill/entities/skill.entity";
import { UserEntity } from "../../user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm";

@Entity('cv')
export class CvEntity {
    @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name:string
  @Column()
  firstname:string
  @Column()
  Age:number
  @Column()
cin:number
  @Column()
  job:string
  @Column()
  path:string
  @ManyToOne(
    type=>UserEntity,
    (user)=>user.cvs,
    {
        eager:true
    }
  )
  user:UserEntity
@ManyToMany(
    
  ()=>Skill, (skill: { cvs: any; })=>skill.cvs,
    {
        eager:true
    }
)

skills:Skill[]


}
