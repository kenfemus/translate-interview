import { Test, TestingModule } from '@nestjs/testing';
import { TranslaterController } from './translater.controller';
import { Target, TranslaterService } from './translater.service';

describe('TranslaterController', () => {
  let translaterController: TranslaterController;
  let translaterService: TranslaterService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TranslaterController],
      providers: [TranslaterService],
    }).compile();

    translaterService = app.get<TranslaterService>(TranslaterService);
    translaterController = app.get<TranslaterController>(TranslaterController);
  });

  describe('Translater', () => {
    it('should return "hello"', async () => {
      jest
        .spyOn(translaterService, 'translateText')
        .mockImplementation(async (): Promise<string> => 'hello');

      jest
        .spyOn(translaterService, 'detect')
        .mockImplementation(async (): Promise<string> => 'th');

      const result = await translaterController.translate({
        text: 'สวัสดี',
        target: Target.en,
      });
      expect(result).toEqual({
        text: 'สวัสดี',
        target: 'en',
        translate: 'hello',
      });
    });
  });
});
