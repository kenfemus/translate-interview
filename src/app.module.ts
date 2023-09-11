import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TranslaterController } from './translater.controller';
import { TranslaterService } from './translater.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [TranslaterController],
  providers: [TranslaterService],
})
export class AppModule {}
