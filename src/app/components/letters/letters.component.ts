import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Game} from '../../model/game';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.css']
})
export class LettersComponent implements OnInit {

  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  @Input('usedLetters')
  used: string[] = [];
  @Input('invalidLetters')
  invalid: string[] = [];
  @Input()
  forceShow = false;


  @Output('onLetterSelect')
  letterSelect: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  letterDisabled(letter: string): boolean {
    return this.used.indexOf(letter) >= 0;
  }

  letterClick(letter: string): void {
    this.letterSelect.emit(letter);
  }

  invalidLetter(letter: string): boolean {
    return this.invalid.indexOf(letter) >= 0;
  }

}
