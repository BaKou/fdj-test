import { Controller, Get } from '@nestjs/common';
import { LeaguesService } from './leagues.service';

@Controller('leagues')
export class LeaguesController {

  constructor(private readonly service: LeaguesService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
