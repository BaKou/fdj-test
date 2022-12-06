import { CacheModule, Module } from '@nestjs/common';
import { LeaguesService } from './leagues.service';
import { LeaguesController } from './leagues.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { League, LeagueSchema } from './schemas/league.schema';


@Module({
  controllers: [LeaguesController],
  providers: [LeaguesService],
  imports: [
    MongooseModule.forFeature([
      { name: League.name, schema: LeagueSchema },
    ]),
    CacheModule.register(),
  ],
  exports:[LeaguesService]
})
export class LeaguesModule {}
