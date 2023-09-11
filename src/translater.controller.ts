import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { TranslateDto } from './translater.dto';
import { Target, TranslaterService } from './translater.service';

@Controller('translater')
export class TranslaterController {
  constructor(private readonly service: TranslaterService) {}

  @Post('translate')
  @HttpCode(200)
  async translate(@Body() translateDto: TranslateDto): Promise<{
    text: string;
    target: Target;
    translate: string;
  }> {
    const { text, target } = translateDto;

    const language = await this.service.detect(text);
    if (language !== 'th') {
      throw new HttpException(
        'Support only Thai language',
        HttpStatus.BAD_REQUEST,
      );
    }

    const translate = await this.service.translateText(text, target);
    return {
      text,
      target,
      translate,
    };
  }
}
