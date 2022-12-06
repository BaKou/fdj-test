

import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Player } from './../../players/schemas/player.schema';

export type TeamDocument = HydratedDocument<Team>;

@Schema()
export class Team {
  @Prop()
  name: string;

  @Prop()
  thumbnail: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }] })
  players: Player[];
}

export const TeamSchema = SchemaFactory.createForClass(Team);
