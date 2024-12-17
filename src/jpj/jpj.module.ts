import { Module } from '@nestjs/common';
import { JpjService } from './jpj.service';
import { JpjController } from './jpj.controller';

@Module({
  controllers: [JpjController],
  providers: [JpjService],
})
export class JpjModule {}
