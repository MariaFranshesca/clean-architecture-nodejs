import { Injectable } from '@nestjs/common'
import { Kendal } from 'src/core/domain/entities/Kendal'
import { KendalRepository } from 'src/core/domain/repository/KendalRepository'
import { KendalDataSource } from '../source/kendal.datasource'

@Injectable()
export class KendalRepositoryImpl implements KendalRepository {
  constructor(private kendalDataSource: KendalDataSource) {}

  async create(kendal: Kendal): Promise<Kendal> {
    return await this.kendalDataSource.create(kendal)
  }
  async findAll(): Promise<Kendal[]> {
    return await this.kendalDataSource.findAll()
  }
  async deleteById(id: string): Promise<string> {
    return await this.kendalDataSource.deleteById(id)
  }
  async update(kendal: Kendal): Promise<string> {
    return await this.kendalDataSource.update(kendal)
  }
}
