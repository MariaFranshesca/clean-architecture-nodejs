import { IsString } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'
export class ClassKendalDto {
  @ApiModelProperty({
    example: 'Admission',
    description: 'Protocol option title',
  })
  @IsString()
  title: string
  @ApiModelProperty({
    example: 'How can I apply?',
    description: 'Desired query text',
  })
  @IsString()
  input: string
  @ApiModelProperty({
    example: 'You have to pay the admission procedure fee',
    description: 'Response associated with query',
  })
  @IsString()
  output: string
  @ApiModelProperty({
    example: '["admission", "exam", "enter"]',
    description: 'Keywords associated with the question and answer',
  })
  keywords: string[]
  @ApiModelProperty({
    example: 'admission',
    description: 'Category associated with the question and answer',
  })
  @IsString()
  category: string
  @ApiModelProperty({
    example: 'objectId',
    description: 'Direct relationship to a response created',
  })
  parentid: string
}
