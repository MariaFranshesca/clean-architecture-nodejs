import { KendalBotOption } from './entity/kendalbot.entity'

export class KendalBot {
  outputmessage: string
  options: KendalBotOption[]
  constructor(message: string) {
    this.outputmessage = message
    this.options = Array<KendalBotOption>()
  }
}
