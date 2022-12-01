import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { CvEntity } from './entities/cv.entity';

@Injectable()
export class CvService {
  constructor(
    @InjectRepository(CvEntity)
    private cvRepository: Repository<CvEntity>
  ){}
  async addCV(cv:CreateCvDto):Promise<CvEntity>{
    return await this.cvRepository.save(cv);
  }
  create(createCvDto: CreateCvDto) {
    return this.cvRepository.save(createCvDto);
  }

  findAll() {
    return this.cvRepository.find()
  }

  async findOne(id: number):Promise<CvEntity>{
    const Entity =await this.cvRepository.findOne({where: {id}});
    if (!Entity)
  {
    throw new NotFoundException
  }
  return Entity
  }

  async update(id: number, updateCvDto: UpdateCvDto) {
    const Entity =await this.cvRepository.preload({id, ...updateCvDto});
    if(! Entity){
      throw new NotFoundException();
    }
    return this.cvRepository.save(Entity)
  }

  async remove(id: number) {
    await this.cvRepository.delete(id)
   
  }
}
