import { CvEntity } from "../../cv/entities/cv.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
  id: number;
  
  @Column(
    {
      
        unique:true

    }
  )
  username:string
  @Column(
    {
      
        unique:true
    }
  )
  email:string
  @Column({select:false})
  password:string
  @OneToMany(
    type=>CvEntity,
   (cv)=>cv.user,
  
    )
    cvs:CvEntity[]
}