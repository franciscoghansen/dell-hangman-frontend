import {Component, Input, OnInit} from '@angular/core';
import {Word} from '../../model/word';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  @Input()
  word: Word;
  @Input()
  letters: string[] = [];
  @Input()
  forceShow = false;


  constructor() {
  }

  ngOnInit(): void {

  }

  letterIsUsed(letter: string): boolean {
    return this.letters.indexOf(letter) >= 0 || this.forceShow;
  }

}
