import { Component, OnInit } from '@angular/core';
import { Song } from './song.model';
import { SongService } from './song.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  public songs: Array<Song> = [];

  constructor(private _songService: SongService) { }

  ngOnInit(): void {
    this._songService.refreshList.subscribe(f => {
      this._songService.getAll().subscribe(songs => this.songs = songs);
    });
  }

  delete(id: number) {
    this._songService.delete(id).subscribe({
      next: (r) => {
        console.log(r);
        this._songService.refreshList.next(true);
      },
      error: (e) => console.log(e),
    });
  }
}
