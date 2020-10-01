import { ApiModelProperty } from '@nestjs/swagger';
export class HistoryMessage {
  @ApiModelProperty()
  date: Date;
  @ApiModelProperty()
  ip: string;
  @ApiModelProperty()
  device: string;
  @ApiModelProperty()
  user: string;
  @ApiModelProperty()
  aditionalInfo: string;
}
