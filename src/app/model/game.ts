import {AbstractModel} from './abstract-model';
import {Player} from './player';
import {Word} from './word';
import {GameLetter} from './game-letter';

export class Game extends AbstractModel {
  player: Player;
  word: Word;
  score = 6;
  usedLetters: GameLetter[] = [];
}
