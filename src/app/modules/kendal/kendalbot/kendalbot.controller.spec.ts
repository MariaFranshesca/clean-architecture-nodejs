import { Test, TestingModule } from '@nestjs/testing'
import { KendalBotController } from './KendalBotController'

describe('Kendalbot Controller', () => {
  let controller: KendalBotController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KendalBotController],
    }).compile()

    controller = module.get<KendalBotController>(KendalBotController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
