import { Model } from 'mongoose'
import { KendalBot } from 'src/core/domain/entities/KendalBot'
import { KendalBotDataSource } from '../../KendalBotDataSource'
import { InjectModel } from '@nestjs/mongoose'
import { KendalDocument } from './documents/KendalDocument'
import { KendalBotOption } from 'src/core/domain/entities/KendalBotOption'

export class KendalBotMongoDB implements KendalBotDataSource {
  constructor(@InjectModel('Kendal') private readonly kendalModel: Model<KendalDocument>) {}

  async chatBot(input: string): Promise<KendalBot> {
    const newInput = input.trimLeft().trimRight()
    const kendalInput = await this.kendalModel.findOne({ input: newInput }).lean()
    if (kendalInput) {
      const kendalOptions = await this.kendalModel.find({ parentid: kendalInput._id }).lean()
      const kendalBot = new KendalBot(kendalInput.output)
      kendalOptions.forEach(item => {
        kendalBot.options.push(new KendalBotOption(item.title, item.input))
      })
      return kendalBot
    } else {
      const splitInput = newInput.split(' ')
      const kendalKeywords = await this.kendalModel.find({ keywords: { $in: splitInput } }).lean()
      if (kendalKeywords.length > 0) {
        const kendalUnderstand = await this.kendalModel.findOne({ keywords: 'helpunderstand' }).lean()
        const kendalBot = new KendalBot(kendalUnderstand.output)
        kendalKeywords.forEach(item => {
          kendalBot.options.push(new KendalBotOption(item.title, item.input))
        })
        return kendalBot
      }
      const understand = await this.kendalModel.findOne({ keywords: 'notunderstand' }).lean()
      return new KendalBot(understand.output)
    }
  }
}
