import { KendalBotOption } from './KendalBotOption'
export class KendalBot {
  outputmessage: string
  options: KendalBotOption[]
  constructor(message: string) {
    this.outputmessage = message
    this.options = Array<KendalBotOption>()
  }
}
