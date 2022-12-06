import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Team } from './../../teams/schemas/team.schema';

export type LeagueDocument = HydratedDocument<League>;

@Schema()
export class League {
  @Prop()
  name: string;

  @Prop()
  sport: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }] })
  teams: Team[];
}

export const LeagueSchema = SchemaFactory.createForClass(League);
