import { Controller, Get, Param } from '@nestjs/common';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {

  constructor(private readonly service: TeamsService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') teamId: string) {
    return this.service.findOne(teamId);
  }

  @Get('league/:id')
  findByLeague(@Param('id') leagueId: string) {
    return this.service.findTeamByLeague(leagueId);
  }
}
