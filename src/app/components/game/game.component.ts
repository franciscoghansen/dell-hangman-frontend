import {Component, OnInit} from '@angular/core';
import {Game} from '../../model/game';
import {GameService} from '../../services/game.service';
import {GameLetter} from '../../model/game-letter';
import {LOCAL_STORAGE_PLAYER} from '../../constants';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game: Game;
  validLetters: string[] = [];
  invalidLetters: string[] = [];
  usedLetters: string[] = [];

  forceShowLetters: boolean;
  finished: boolean;
  lost: boolean;
  dialogVisible: boolean;

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this.validLetters = [];
    this.invalidLetters = [];
    this.usedLetters = [];
    this.dialogVisible = false;
    this.finished = false;
    this.lost = false;
    this.forceShowLetters = false;
    this.game = undefined;
    this.gameService.newObject()
      .then(g => {
        this.game = {...g};
        this.game.player = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PLAYER));
      });
  }

  validateLetter(letter: string): boolean {
    if (this.game.word.word.indexOf(letter) >= 0) {
      this.validLetters.push(letter);
      return true;
    } else {
      this.invalidLetters.push(letter);
      return false;
    }
  }

  gameFinished(): boolean {
    if (this.game.score === 0) {
      return true;
    } else {
      let sWord = '';
      for (const s of this.game.word.word.split('')) {
        if (this.validLetters.indexOf(s) >= 0) {
          sWord += s;
        }
      }
      return sWord === this.game.word.word;
    }
  }

  onLetterSelect(letter: string): void {
    this.usedLetters.push(letter);
    const l: GameLetter = new GameLetter();
    l.letter = letter;
    this.game.usedLetters.push({...l});
    if (!this.validateLetter(letter)) {
      this.game.score -= 1;
      if (this.game.score < 0) {
        this.game.score = 0;
      }
    }
    if (this.gameFinished()) {
      this.forceShowLetters = true;
      this.finished = true;
      this.lost = this.game.score === 0;
      this.dialogVisible = true;

    }
    this.gameService.save(this.game)
      .then(g => {
        this.game = {...g};
      });
  }

  onExitClick(): void {
    this.dialogVisible = false;
  }

}
