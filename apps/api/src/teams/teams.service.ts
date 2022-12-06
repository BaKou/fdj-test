import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { League, LeagueDocument } from '../leagues/schemas/league.schema';
import { Team, TeamDocument } from './schemas/team.schema';

@Injectable()
export class TeamsService {
  constructor(
    @InjectModel(Team.name) private teamModel: Model<TeamDocument>,
    @InjectModel(League.name) private leagueModel: Model<LeagueDocument>,
  ) {}

  async findAll(): Promise<Team[]>{
    return this.teamModel.find().exec();
  }

  async findOne(teamId: string): Promise<Team>{
    return this.teamModel.findOne({ _id: teamId }).exec();
  }

  async findTeamByLeague(leagueId: string): Promise<Team[]> {
     // Récupère le document principal
     const document = await this.leagueModel.findOne({ _id: leagueId });

     // Récupère le tableau d'identifiants de documents d'une autre table
     const teamIds = document['teams'];

     // Récupère les documents d'une autre table correspondant aux identifiants
     const teamsDocuments = await this.teamModel.find({
       _id: { $in: teamIds },
     });

     return teamsDocuments;
  }
}
