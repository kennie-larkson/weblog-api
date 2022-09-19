import { Module } from '@nestjs/common';
import Joi, * as joi from '@hapi/joi';
import { ConfigModule } from '@nestjs/config';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import DatabaseModule from './databaseConfig/database.module';

@Module({
  imports: [
    UserModule,
    PostModule,
    CommentModule,
    DatabaseModule,
    ConfigModule.forRoot({
      validationSchema: joi.object({
        PORT: joi.number().required(),
        POSTGRES_PORT: joi.number().required(),
        POSTGRES_USER: joi.string().required(),
        POSTGRES_DB: joi.string().required(),
        POSTGRES_PASSWORD: joi.string().required(),
        POSTGRES_HOST: joi.string().required(),
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
