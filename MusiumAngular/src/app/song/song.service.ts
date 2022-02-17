import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Song } from './song.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  refreshList = new BehaviorSubject(false);
  private _url = "https://localhost:7095/api/song/";

  constructor(private _http: HttpClient) { }

  getAll(): Observable<Song[]> {
    return this._http.get<Song[]>(this._url);
  }

  getById(id: number): Observable<Song> {
    return this._http.get<Song>(this._url + id);
  }

  add(songForm: FormGroup): Observable<Song> {
    return this._http.post<Song>(this._url, songForm);
  }

  update(songForm: FormGroup): Observable<Song> {
    return this._http.put<Song>(this._url, songForm);
  }

  delete(id: number): Observable<Song> {
    return this._http.delete<Song>(this._url + id);
  }
}
