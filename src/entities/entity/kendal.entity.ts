import { ApiModelProperty } from '@nestjs/swagger';

export class Kendal {
  @ApiModelProperty()
  title: string;
  @ApiModelProperty()
  input: string;
  @ApiModelProperty()
  output: string;
  @ApiModelProperty()
  keywords: string[];
  @ApiModelProperty()
  category: string;
  @ApiModelProperty()
  parentid: string;
}
