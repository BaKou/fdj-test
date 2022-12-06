import { CacheModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LeaguesModule } from '../leagues/leagues.module';
import { League, LeagueSchema } from '../leagues/schemas/league.schema';
import { Team, TeamSchema } from './schemas/team.schema';
import { TeamsController } from './teams.controllers';
import { TeamsService } from './teams.service';

@Module({
  controllers: [TeamsController],
  providers: [TeamsService],
  imports: [
    MongooseModule.forFeature([
      { name: Team.name, schema: TeamSchema },
      {
        name: League.name,
        schema: LeagueSchema,
      },
    ]),
    LeaguesModule,
    CacheModule.register(),
  ],
})
export class TeamsModule {}
