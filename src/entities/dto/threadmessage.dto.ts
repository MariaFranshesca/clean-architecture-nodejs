export class ThreadMessageDto {
  message: string;
  username: string;
  dateTimeSend: Date;
  historyMsgId: string;
  type: string;
  constructor(
    message: string,
    username: string,
    historyMsgId: string,
    type: string,
  ) {
    this.message = message;
    this.username = username;
    this.historyMsgId = historyMsgId;
    this.type = type;
  }
}
