import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Song } from './song.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private _url = "https://localhost:7095/api/song";

  constructor(private _http: HttpClient) { }

  getAll(): Observable<Song[]> {
    return this._http.get<Song[]>(this._url)
  }

  getById(id: number) { }

  add(songForm: FormGroup) { }
}
