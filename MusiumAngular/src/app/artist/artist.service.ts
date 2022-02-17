import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Artist } from './artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  refreshList = new BehaviorSubject(false);
  private _url = "https://localhost:7095/api/artist";

  constructor(private _http: HttpClient) { }

  getAll(): Observable<Artist[]> {
    return this._http.get<Artist[]>(this._url);
  }

  getBySongId(id: number): Observable<Artist[]> {
    return this._http.get<Artist[]>(this._url + "/bysong/" + id);
  }

  getById(id: number): Observable<Artist> {
    return this._http.get<Artist>(this._url + "/" + id);
  }

  add(artistForm: string): Observable<Artist> {
    return this._http.post<Artist>(this._url, artistForm);
  }

  update(artistForm: FormGroup): Observable<Artist> {
    return this._http.put<Artist>(this._url, artistForm);
  }
}
