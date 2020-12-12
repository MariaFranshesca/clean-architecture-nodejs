import { Controller, Get, HttpStatus, Param } from '@nestjs/common'
import 'dotenv/config'

@Controller('status')
export class StatusController {
  @Get(':ping')
  async status(@Param() params): Promise<string> {
    console.log(process.env.DB_CONNECTION)
    const ping = params.ping === undefined ? 'ping' : params.ping
    return await `${ping} -> pong`
  }
}
