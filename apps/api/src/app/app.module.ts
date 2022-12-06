import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LeaguesModule } from '../leagues/leagues.module';
import { TeamsModule } from '../teams/teams.module';
  import { PlayersModule } from '../players/players.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017',{dbName: 'fdj-football'}),
    LeaguesModule,
    TeamsModule,
    PlayersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
