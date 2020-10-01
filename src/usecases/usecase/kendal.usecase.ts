import { Injectable } from '@nestjs/common';
import { IKendal } from '../../entities/interfaces/kendal.interfaces';
import { ClassKendalDto } from '../../entities/dto/kendal.dto';
import { KendalRepository } from '../repository/kendal.repository';

@Injectable()
export class KendalUseCase {
  constructor(private kendalRepository: KendalRepository) {}

  async create(createKendalDto: ClassKendalDto): Promise<IKendal> {
    return await this.kendalRepository.create(createKendalDto);
  }
  async findAll(): Promise<IKendal[]> {
    return await this.kendalRepository.findAll();
  }
  async deleteById(id: string): Promise<string> {
    return await this.kendalRepository.deleteById(id);
  }
  async update(id: string, updateKendalDto: ClassKendalDto): Promise<string> {
    return await this.kendalRepository.update(id, updateKendalDto);
  }
}
