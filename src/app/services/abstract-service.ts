import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AbstractModel} from '../model/abstract-model';

export abstract class AbstractService<T extends AbstractModel> {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  abstract endpoint(): string;

  baseUrl(): string {
    return environment.api + this.endpoint();
  }

  searchBaseUrl(): string {
    return this.baseUrl() + '/search';
  }

  newObject(): Promise<T> {
    return this.http.get<T>(this.baseUrl() + '/new').toPromise();
  }

  save(obj: T): Promise<T> {
    return this.http.post<T>(this.baseUrl(), obj).toPromise();
  }

}
