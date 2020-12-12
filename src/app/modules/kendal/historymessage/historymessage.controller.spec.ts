import { Test, TestingModule } from '@nestjs/testing'
import { HistoryMessageController } from './HistoryMessageController'

describe('Historymessage Controller', () => {
  let controller: HistoryMessageController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoryMessageController],
    }).compile()

    controller = module.get<HistoryMessageController>(HistoryMessageController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
