import { ApiModelProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class KendalBotDto {
  @ApiModelProperty({
    example: 'Kendal init',
    description: 'Message query by users',
  })
  @IsString()
  inputmessage: string
}

export function removeSpacesBlank(input: string): string {
  return input.trimLeft().trimRight()
}
