import { Test, TestingModule } from '@nestjs/testing'
import { KendalbotController } from './kendalbot.controller'

describe('Kendalbot Controller', () => {
  let controller: KendalbotController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KendalbotController],
    }).compile()

    controller = module.get<KendalbotController>(KendalbotController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
