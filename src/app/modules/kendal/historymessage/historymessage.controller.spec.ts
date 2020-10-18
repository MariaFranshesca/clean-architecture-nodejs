import { Test, TestingModule } from '@nestjs/testing'
import { HistorymessageController } from './historymessage.controller'

describe('Historymessage Controller', () => {
  let controller: HistorymessageController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistorymessageController],
    }).compile()

    controller = module.get<HistorymessageController>(HistorymessageController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
