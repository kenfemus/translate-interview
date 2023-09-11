import { Injectable } from '@nestjs/common';
import { v2 } from '@google-cloud/translate';

const translate = new v2.Translate();

export enum Target {
  'en' = 'en',
  'fr' = 'fr',
}

@Injectable()
export class TranslaterService {
  async detect(text: string): Promise<string> {
    const [detect] = await translate.detect(text);
    return detect.language;
  }

  async translateText(text: string, target: Target): Promise<string> {
    const [translations] = await translate.translate(text, target);
    return translations;
  }
}
