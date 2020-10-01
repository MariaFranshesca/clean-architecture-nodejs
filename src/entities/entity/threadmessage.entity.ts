import { ApiModelProperty } from '@nestjs/swagger';
export class ThreadMessage {
  @ApiModelProperty()
  message: string;
  @ApiModelProperty()
  username: string;
  @ApiModelProperty()
  dateTimeSend: string;
  @ApiModelProperty()
  type: string;
  @ApiModelProperty()
  historyMsgId: string;
}
