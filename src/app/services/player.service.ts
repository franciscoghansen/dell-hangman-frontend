import {Injectable} from '@angular/core';
import {AbstractService} from './abstract-service';
import {Player} from '../model/player';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService extends AbstractService<Player> {

  constructor(http: HttpClient) {
    super(http);
  }

  endpoint(): string {
    return '/player';
  }

  existsByUid(uid: string): Promise<boolean> {
    const url = this.searchBaseUrl() + '/existsByUid?uid=' + uid;
    return this.http.get<boolean>(url)
      .toPromise();
  }

  findByUid(uid: string): Promise<Player> {
    const url = this.searchBaseUrl() + '/existsByUid?uid=' + uid;
    return this.http.get<Player>(url).toPromise();
  }
}
