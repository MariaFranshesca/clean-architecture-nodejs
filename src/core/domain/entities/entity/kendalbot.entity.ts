import { ApiModelProperty } from '@nestjs/swagger'
export class KendalBotResponse {
  @ApiModelProperty()
  outputmessage: string
  options: KendalBotOption[]
  constructor(message: string) {
    this.outputmessage = message
    this.options = Array<KendalBotOption>()
  }
}
// tslint:disable-next-line:max-classes-per-file
export class KendalBotOption {
  @ApiModelProperty()
  title: string
  @ApiModelProperty()
  query: string
  constructor(title: string, query: string) {
    this.title = title
    this.query = query
  }
}
