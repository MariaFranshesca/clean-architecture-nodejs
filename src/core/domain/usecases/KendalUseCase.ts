import { Injectable } from '@nestjs/common'
import { KendalRepository } from '../repository/KendalRepository'
import { Kendal } from '../entities/Kendal'

@Injectable()
export class KendalUseCase {
  constructor(private kendalRepository: KendalRepository) {}

  async create(kendal: Kendal): Promise<Kendal> {
    return await this.kendalRepository.create(kendal)
  }
  async findAll(): Promise<Kendal[]> {
    return await this.kendalRepository.findAll()
  }
  async deleteById(id: string): Promise<string> {
    return await this.kendalRepository.deleteById(id)
  }
  async update(kendal: Kendal): Promise<string> {
    return await this.kendalRepository.update(kendal)
  }
}
