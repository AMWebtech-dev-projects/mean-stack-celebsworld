import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  artist: string = 'artist';
  constructor(private http: HttpClient, private apiService: ApiService) {}

  public saveArtist(param: object): Observable<any> {
    return this.apiService.post(`${this.artist}/saveArtist`, param).pipe(
      map((data) => {
        return data;
      })
    );
  }

  public getArtistList(param?: object): Observable<any> {
    return this.apiService.post(`${this.artist}/getArtist`, param).pipe(
      map((data) => {
        return data;
      })
    );
  }

  public deleteArtist(param: object): Observable<any> {
    return this.apiService.delete(`${this.artist}/deleteArtist`, param).pipe(
      map((data) => {
        return data;
      })
    );
  }

  public quickSearchArtist(param: object): Observable<any> {
    return this.apiService.post(`${this.artist}/quickSearchArtist`, param).pipe(
      map((data) => {
        return data;
      })
    );
  }

}
