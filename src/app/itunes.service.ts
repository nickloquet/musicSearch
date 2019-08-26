import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ItunesService {
  constructor(private http: Http) { }
  search(criteria) {
    return this.http.get('https://itunes.apple.com/search?term=${criteria.titleTrack}')
  }
}