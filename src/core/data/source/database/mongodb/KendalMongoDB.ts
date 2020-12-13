import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { KendalDataSource } from '../../KendalDataSource'
import { KendalDocument } from '../../../../data/source/database/mongodb/documents/KendalDocument'
import { Kendal } from '../../../../domain/entities/Kendal'
import { Injectable } from '@nestjs/common'

@Injectable()
export class KendalMongoDB implements KendalDataSource {
  constructor(@InjectModel('Kendal') private readonly kendalModel: Model<KendalDocument>) {}

  async create(kendal: Kendal): Promise<Kendal> {
    const createKendal = new this.kendalModel(kendal)
    const kendalDocument: KendalDocument = await createKendal.save()
    return this.mapDocumentToKendal(kendalDocument)
  }
  async deleteById(id: string): Promise<string> {
    await this.kendalModel.deleteOne({ _id: id })
    return 'Eliminado correctamente'
  }
  async update(kendal: Kendal): Promise<string> {
    await this.kendalModel.findByIdAndUpdate(kendal.id, kendal)
    return 'Editado correctamente'
  }
  async findAll(): Promise<Kendal[]> {
    return await this.kendalModel.find().exec()
  }

  private mapDocumentToKendal(item: KendalDocument) {
    const kendal = new Kendal()
    kendal.id = item.id
    kendal.title = item.title
    kendal.input = item.input
    kendal.output = item.output
    kendal.keywords = item.keywords
    kendal.category = item.category
    kendal.parentid = item.parentid
    return kendal
  }
}
