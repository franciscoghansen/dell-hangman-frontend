import { Component, OnInit } from '@angular/core';
import {Player} from '../../model/player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  player: Player;

  constructor() { }

  ngOnInit(): void {
  }


}
