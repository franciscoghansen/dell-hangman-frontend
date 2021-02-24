import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Game} from '../model/game';
import {AbstractService} from './abstract-service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService extends AbstractService<Game> {

  constructor(http: HttpClient) {
    super(http);
  }

  endpoint(): string {
    return '/game';
  }



}


