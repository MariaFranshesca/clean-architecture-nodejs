export class HistoryMessageDto {
  date: Date
  ip: string
  device: string
  aditionalInfo: string
  user: string
  constructor(ip: string, device: string, aditionalInfo: string, user: string) {
    this.ip = ip
    this.device = device
    this.aditionalInfo = aditionalInfo
    this.user = user
  }
}
