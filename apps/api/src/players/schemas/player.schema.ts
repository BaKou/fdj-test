import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PlayerDocument = HydratedDocument<Player>;

@Schema()
export class Player {
  @Prop()
  name: string;

  @Prop()
  position: string;

  @Prop()
  thumbnail: string;

  @Prop({ type: Object })
  signin: object;

  @Prop()
  born: Date;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
