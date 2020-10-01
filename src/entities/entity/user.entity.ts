import { ApiModelProperty } from '@nestjs/swagger';

export class User {
  @ApiModelProperty()
  username: string;
  @ApiModelProperty({ format: 'password' })
  password: string;
  date: Date;
}
