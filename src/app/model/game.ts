import {AbstractModel} from './abstract-model';
import {Player} from './player';
import {Word} from './word';

export class Game extends AbstractModel{
  player: Player;
  word: Word;
  score = 6;
}
