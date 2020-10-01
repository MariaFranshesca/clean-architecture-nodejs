import { Model } from 'mongoose';
import { KendalRepository } from '../../usecases/repository/kendal.repository';
import { ClassKendalDto } from '../../entities/dto/kendal.dto';
import { IKendal } from '../../entities/interfaces/kendal.interfaces';
import { InjectModel } from '@nestjs/mongoose';

export class KendalMongoDB implements KendalRepository {
  constructor(
    @InjectModel('Kendal') private readonly kendalModel: Model<IKendal>,
  ) {}

  async create(createKendalDto: ClassKendalDto): Promise<IKendal> {
    const createKendal = new this.kendalModel(createKendalDto);
    return await createKendal.save();
  }
  async deleteById(id: string): Promise<string> {
    await this.kendalModel.deleteOne({ _id: id });
    return 'Eliminado correctamente';
  }
  async update(id: string, updateKendalDto: ClassKendalDto): Promise<string> {
    await this.kendalModel.findByIdAndUpdate(id, updateKendalDto);
    return 'Editado correctamente';
  }
  async findAll(): Promise<IKendal[]> {
    return await this.kendalModel.find().exec();
  }
}
