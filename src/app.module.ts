import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JpjModule } from './jpj/jpj.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'process';

@Module({
  imports: [JpjModule, TypeOrmModule.forRootAsync(
    {
      imports:[ConfigModule],
      useFactory: async (configService: ConfigService)=>(
        {
          type: configService.get('DB_TYPE'),
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          entities: configService.get('DB_ENTITIES'),
          synchronize: false
        }
      )
    }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
