import { Test, TestingModule } from '@nestjs/testing'
import { ThreadMessageController } from './ThreadMessageController'

describe('Threadmessage Controller', () => {
  let controller: ThreadMessageController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThreadMessageController],
    }).compile()

    controller = module.get<ThreadMessageController>(ThreadMessageController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
