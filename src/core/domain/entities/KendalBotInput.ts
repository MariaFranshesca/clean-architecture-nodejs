export class KendalBotInput {
  ip: string
  input: string
  device: string
  aditionalInfo: string
  username: string
  constructor(ip: string, device: string, aditionalInfo: string, username: string) {
    this.ip = ip
    this.device = device
    this.aditionalInfo = aditionalInfo
    this.username = username
  }
}
