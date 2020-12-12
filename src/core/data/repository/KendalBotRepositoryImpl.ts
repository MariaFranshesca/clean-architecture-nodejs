import { Injectable } from '@nestjs/common'
import { HistoryMessage } from 'src/core/domain/entities/HistoryMessage'
import { KendalBot } from 'src/core/domain/entities/KendalBot'
import { KendalBotInput } from 'src/core/domain/entities/KendalBotInput'
import { ThreadMessage } from 'src/core/domain/entities/ThreadMessage'
import { KendalBotRepository } from 'src/core/domain/repository/KendalBotRepository'
import { HistoryMessageDataSource } from '../source/HistoryMessageDataSource'
import { KendalBotDataSource } from '../source/KendalBotDataSource'
import { ThreadMessageDataSource } from '../source/ThreadMessageDataSource'
import { UserDataSource } from '../source/UserDataSource'

@Injectable()
export class KendalBotRepositoryImpl implements KendalBotRepository {
  constructor(
    private kendalBotDataSource: KendalBotDataSource,
    private historyMessageDataSource: HistoryMessageDataSource,
    private threadMessageDataSource: ThreadMessageDataSource,
    private userDataSource: UserDataSource
  ) {}

  async chatBot(kendalBotInput: KendalBotInput): Promise<KendalBot> {
    let historyMessage = await this.historyMessageDataSource.findBy(kendalBotInput)
    const user = await this.userDataSource.findByUsername(kendalBotInput.username)
    if (historyMessage == null) {
      const newHistoryMessage = new HistoryMessage(
        kendalBotInput.ip,
        kendalBotInput.device,
        kendalBotInput.aditionalInfo,
        user.id
      )
      historyMessage = await this.historyMessageDataSource.initHistoryMessage(newHistoryMessage)
    }
    const threadMessageInput = new ThreadMessage()
    threadMessageInput.message = kendalBotInput.input
    threadMessageInput.username = kendalBotInput.username
    threadMessageInput.historyMsgId = historyMessage.id
    threadMessageInput.type = 'input'
    const threadMessageSave = await this.threadMessageDataSource.addThreadToHistoryMessage(threadMessageInput)
    const chatBot = await this.kendalBotDataSource.chatBot(kendalBotInput.input)
    historyMessage.threadMessages.push(threadMessageSave)

    const threadMessageOutput = new ThreadMessage()
    threadMessageOutput.message = chatBot.outputmessage
    threadMessageOutput.username = 'kendal'
    threadMessageOutput.historyMsgId = historyMessage.id
    threadMessageOutput.type = 'output'

    const threadMessageOuputSave = await this.threadMessageDataSource.addThreadToHistoryMessage(threadMessageOutput)
    historyMessage.threadMessages.push(threadMessageOuputSave)
    await this.historyMessageDataSource.update(historyMessage)
    return chatBot
  }
}
