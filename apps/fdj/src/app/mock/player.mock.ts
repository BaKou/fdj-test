import { PlayerModel } from './../models/player.model';

export const mockPlayer = {
  _id: '123',
   name: 'kilian bappe',
   position: 'A',
   thumbnail: 'https://www.thesportsdb.com/images/media/player/thumb/fnk3u51520755737.jpg',
   signin: {
     amount: 123000000,
     currency: 'eur',
   },
   born: '12/04/2334',
} as PlayerModel
