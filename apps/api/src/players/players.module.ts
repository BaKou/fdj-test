import { CacheModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Team, TeamSchema } from '../teams/schemas/team.schema';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';
import { Player, PlayerSchema } from './schemas/player.schema';

@Module({
  controllers: [PlayersController],
  providers: [PlayersService],
  imports: [
    MongooseModule.forFeature([
      { name: Player.name, schema: PlayerSchema },
      {
        name: Team.name,
        schema: TeamSchema,
      },
    ]),
    CacheModule.register(),
  ],
})
export class PlayersModule {}
