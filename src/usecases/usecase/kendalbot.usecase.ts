import { Injectable } from '@nestjs/common';
import { KendalBotResponse } from '../../entities/entity/kendalbot.entity';
import { KendalBotDto } from '../../entities/dto/kendalbot.dto';
import { KendalBotRepository } from '../repository/kendalbot.repository';
import { HistoryMessageRepository } from '../repository/historymessage.repository';
import { ThreadMessageRepository } from '../repository/threadmessage.reposiitory';
import { HeaderKendalBotDto } from '../../entities/dto/headerkendalbot.dto';
import { HistoryMessageDto } from '../../entities/dto/historymessage.dto';
import { ThreadMessageDto } from '../../entities/dto/threadmessage.dto';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class KendalBotUseCase {
  constructor(
    private readonly userrespository: UserRepository,
    private readonly kendalbotrepository: KendalBotRepository,
    private readonly historyrepository: HistoryMessageRepository,
    private readonly threadrepository: ThreadMessageRepository,
  ) {}

  async chatBot(
    headerkendalbot: HeaderKendalBotDto,
    kendalBotDto: KendalBotDto,
  ): Promise<KendalBotResponse> {
    try {
    const results = await Promise.all([
      this.historyrepository.findBy(headerkendalbot),
      this.userrespository.findByUsername(headerkendalbot.username),
    ]);
    let historyMessage = results[0];
    const user = results[1];
    
    if (historyMessage == null) {
      const historymessagedto = new HistoryMessageDto(
        headerkendalbot.ip,
        headerkendalbot.device,
        headerkendalbot.aditionalInfo,
        user._id,
      );

      

      historyMessage = await this.historyrepository.initHistoryMessage(
        historymessagedto,
      );
    }
    const threadinputmessage = new ThreadMessageDto(
      kendalBotDto.inputmessage,
      headerkendalbot.username,
      historyMessage._id,
      'input',
    );

    const resultstasks = await Promise.all([
      this.threadrepository.addThreadToHistoryMessage(threadinputmessage),
      this.kendalbotrepository.chatBot(kendalBotDto),
    ]);

    const threadinputmsgsave = resultstasks[0];
    historyMessage.threadMessages.push(threadinputmsgsave);

    const kendalbot = resultstasks[1];
    const threadoutputmessage = new ThreadMessageDto(
      kendalbot.outputmessage,
      'kendal',
      historyMessage._id,
      'output',
    );
    const threadoutputmsgsave = await this.threadrepository.addThreadToHistoryMessage(
      threadoutputmessage,
    );
    historyMessage.threadMessages.push(threadoutputmsgsave);
    await this.historyrepository.update(historyMessage);
    return kendalbot;
  }catch(ex) {
      console.log(ex)
  }
  }
}
