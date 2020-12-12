import { ThreadMessage } from './ThreadMessage'

export class HistoryMessage {
  id: string
  date: Date
  ip: string
  device: string
  aditionalInfo: string
  user: string
  threadMessages: ThreadMessage[]
  constructor(ip: string, device: string, aditionalInfo: string, user: string) {
    this.ip = ip
    this.device = device
    this.aditionalInfo = aditionalInfo
    this.user = user
  }
}
