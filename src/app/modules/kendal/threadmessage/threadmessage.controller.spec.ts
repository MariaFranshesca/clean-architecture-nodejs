import { Test, TestingModule } from '@nestjs/testing'
import { ThreadmessageController } from './threadmessage.controller'

describe('Threadmessage Controller', () => {
  let controller: ThreadmessageController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThreadmessageController],
    }).compile()

    controller = module.get<ThreadmessageController>(ThreadmessageController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
