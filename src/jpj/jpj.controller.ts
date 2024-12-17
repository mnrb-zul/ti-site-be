import { Controller, Get } from '@nestjs/common';
import { JpjService } from './jpj.service';

@Controller('jpj')
export class JpjController {
  constructor(private readonly jpjService: JpjService) {}
  //Receive data from user, send back excel

  @Get("/status")
  getStatus(): string{
    return this.jpjService.getStatus()
  }

  @Get("/used")
  getUsed(): string{
    return this.jpjService.getUsed()
  }
}
