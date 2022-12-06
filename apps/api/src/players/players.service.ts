import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team, TeamDocument } from '../teams/schemas/team.schema';
import { Player, PlayerDocument } from './schemas/player.schema';


@Injectable()
export class PlayersService {
  constructor(
    @InjectModel(Player.name) private playerModel: Model<PlayerDocument>,
    @InjectModel(Team.name) private teamModel: Model<TeamDocument>,
  ) {}

  async findAll(): Promise<Player[]>{
    return this.playerModel.find().exec();
  }

  async findOne(id: string): Promise<Player> {
    return this.playerModel.findById({ _id: id }).exec();
  }

  async findPlayerByTeam(teamId: string): Promise<Player[]> {
    // Récupère le document principal
    const document = await this.teamModel.findOne({ _id: teamId });

    // Récupère le tableau d'identifiants de documents d'une autre table
    const teamIds = document['players'];

    // Récupère les documents d'une autre table correspondant aux identifiants
    const playersDocuments = await this.playerModel.find({
      _id: { $in: teamIds },
    });

    return playersDocuments;
 }
}
