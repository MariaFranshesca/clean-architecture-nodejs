import { IsString, IsDate } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class UserDto {
  @ApiModelProperty({
    example: 'KendalUser',
    description: 'Username who interacts with KendalBot',
  })
  @IsString()
  username: string;
  @ApiModelProperty({
    format: 'password',
    example: 'Kendal123',
    description:
      'Password who interacts with maintainer, not required for KendalBot user',
  })
  @IsString()
  password: string;
  date: Date;
}
