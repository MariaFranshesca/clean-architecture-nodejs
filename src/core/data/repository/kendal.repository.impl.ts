import { Injectable } from "@nestjs/common"
import { ClassKendalDto } from "src/core/domain/entities/dto/kendal.dto"
import { IKendal } from "src/core/domain/entities/interfaces/kendal.interfaces"
import { KendalDataSource } from "../source/kendal.datasource"

@Injectable()
export class KendalRepositoryImpl {
  constructor(private kendalDataSource: KendalDataSource) {}

  async create(createKendalDto: ClassKendalDto): Promise<IKendal> {
    return await this.kendalDataSource.create(createKendalDto)
  }
  async findAll(): Promise<IKendal[]> {
    return await this.kendalDataSource.findAll()
  }
  async deleteById(id: string): Promise<string> {
    return await this.kendalDataSource.deleteById(id)
  }
  async update(id: string, updateKendalDto: ClassKendalDto): Promise<string> {
    return await this.kendalDataSource.update(id, updateKendalDto)
  }
}