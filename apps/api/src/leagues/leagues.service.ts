import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { League, LeagueDocument } from './schemas/league.schema';

@Injectable()
export class LeaguesService {
  constructor(
    @InjectModel(League.name) private leagueModel: Model<LeagueDocument>,
  ) {}

  async findAll(): Promise<League[]>{
    return this.leagueModel.find().exec();
  }

  async findOne(id: string): Promise<League> {
    return this.leagueModel.findById({ _id: id }).exec();
  }
}
