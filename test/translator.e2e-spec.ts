import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { ValidationPipe } from '@nestjs/common';

describe('TranslatorController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('/translate (POST)', () => {
    return request(app.getHttpServer())
      .post('/translater/translate')
      .send({ text: 'สวัสดี', target: 'en' })
      .set('Accept', 'application/json')
      .expect(200)
      .expect({
        text: 'สวัสดี',
        target: 'en',
        translate: 'hello',
      });
  });

  it('/translate (POST) target not support', () => {
    return request(app.getHttpServer())
      .post('/translater/translate')
      .send({ text: 'สวัสดี', target: 'abc' })
      .set('Accept', 'application/json')
      .expect(400);
  });

  it('/translate (POST) is not Thai language', () => {
    return request(app.getHttpServer())
      .post('/translater/translate')
      .send({ text: 'hello', target: 'en' })
      .set('Accept', 'application/json')
      .expect(400);
  });
});
