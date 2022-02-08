import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Artist } from './artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private _url = "https://localhost:7095/api/artist";

  constructor(private _http: HttpClient) { }

  getAll(): Observable<Artist[]> {
    return this._http.get<Artist[]>(this._url);
  }

  getBySongId(id: number): Observable<Artist[]> {
    return this._http.get<Artist[]>(this._url + "/bysong/" + id);
  }

  getById(id: number): Observable<Artist>  {
    return this._http.get<Artist>(this._url + "/" + id);
   }

  add(artistForm: FormGroup) { }
}
