import { NestFactory } from "@nestjs/core";
import { randFirstName, randLastName, randJobTitle, randNumber, randUserName, randPassword, randEmail, randSkill } from "@ngneat/falso";
import { AppModule } from "../app.module";
import { CvService } from "../cv/cv.service";
import { CvEntity } from "../cv/entities/cv.entity";
import { Skill } from "../skill/entities/skill.entity";
import { SkillService } from "../skill/skill.service";
import { UserEntity } from "../user/entities/user.entity";
import { UserService } from "../user/user.service";

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    
    const cvService = app.get(CvService);
    const userService = app.get(UserService);
    const skillService = app.get(SkillService);
    const skills: Skill[]=[];
    console.log("enter")

    for(let i=0; i<20;i++){
        const newCv =new CvEntity();
        const newUser=new UserEntity();
        const newSkill=new Skill();
        
        newCv.firstname = randFirstName();
        newCv.name = randLastName();
        newCv.job = randJobTitle();
        newCv.cin = randNumber();
        newCv.Age = randNumber();
        newCv.path='';
        newCv.user=newUser;
        newCv.skills=skills
        newUser.username=randUserName();
        newUser.password=randPassword();
        newUser.email=randEmail();

        newSkill.designation=randSkill();
        newSkill.cvs=[newCv]
        skills[i]=newSkill;
        await skillService.addSkill(newSkill);
        await userService.addUser(newUser)
        await cvService.addCV(newCv);
        console.log("exit")
    }
    
    await app.close();
    }
    bootstrap();