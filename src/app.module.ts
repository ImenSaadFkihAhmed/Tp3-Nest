import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CvModule } from './cv/cv.module';
import { CvEntity } from './cv/entities/cv.entity';
import { Skill } from './skill/entities/skill.entity';
import { SkillModule } from './skill/skill.module';
import { UserEntity } from './user/entities/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'bdata',
    autoLoadEntities:true,
    logging:true,
    entities: [CvEntity,UserEntity,Skill],
    synchronize: true,
  }), CvModule, SkillModule, UserModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
