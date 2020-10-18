import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { KendalDataSource } from '../../kendal.datasource'
import { IKendal } from 'src/core/domain/entities/interfaces/kendal.interfaces'
import { ClassKendalDto } from 'src/core/domain/entities/dto/kendal.dto'

export class KendalMongoDB implements KendalDataSource {
  constructor(@InjectModel('Kendal') private readonly kendalModel: Model<IKendal>) {}

  async create(createKendalDto: ClassKendalDto): Promise<IKendal> {
    const createKendal = new this.kendalModel(createKendalDto)
    return await createKendal.save()
  }
  async deleteById(id: string): Promise<string> {
    await this.kendalModel.deleteOne({ _id: id })
    return 'Eliminado correctamente'
  }
  async update(id: string, updateKendalDto: ClassKendalDto): Promise<string> {
    await this.kendalModel.findByIdAndUpdate(id, updateKendalDto)
    return 'Editado correctamente'
  }
  async findAll(): Promise<IKendal[]> {
    return await this.kendalModel.find().exec()
  }
}
