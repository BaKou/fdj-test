import { Controller, Get, Param } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {

  constructor(private readonly service: PlayersService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('team/:id')
  findByTeam(@Param('id') id: string) {
    return this.service.findPlayerByTeam(id);
  }
}
