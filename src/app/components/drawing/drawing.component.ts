import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Game} from '../../model/game';
import {convertDirectiveMetadataToExpression} from '@angular/core/schematics/migrations/undecorated-classes-with-di/decorator_rewrite/convert_directive_metadata';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.css']
})
export class DrawingComponent implements OnInit {

  constructor() {
  }

  @Input()
  game: Game;

  ngOnInit(): void {
  }

  headLine(): string {
    return this.game.score <= 5 ? '0' : '';
  }

  bodyLine(): string {
    return (this.game.score <= 1 ? '/' : ' ') + (this.game.score <= 4 ? '|' : '') + (this.game.score <= 0 ? '\\' : '');
  }
  feetLine(): string{
    return (this.game.score <= 3 ? '/' : ' ') + ' ' + ( this.game.score <= 2 ? '\\' : '' );
  }


}
