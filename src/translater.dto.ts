import { IsEnum, IsString } from 'class-validator';
import { Target } from './translater.service';

export class TranslateDto {
  @IsString()
  text: string;

  @IsEnum(Target)
  target: Target;
}
