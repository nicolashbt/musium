import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Artist } from '../artist/artist.model';
import { Song } from '../song/song.model';
import { SongService } from '../song/song.service';

@Component({
  selector: 'app-jukebox',
  templateUrl: './jukebox.component.html',
  styleUrls: ['./jukebox.component.scss']
})
export class JukeboxComponent implements OnInit {
  public songs!: Array<Song>
  currentSong!: Song;
  public artists!: Array<Artist>;
  isPlaying = false;
  secondsElapsed = 0;
  private _interval!: any;
  lastRand = 0;

  timeToPlayNext = new BehaviorSubject(true);

  constructor(private _songService: SongService) { }

  ngOnInit(): void {
    this._songService.getAll().subscribe(s => {
      this.songs = s;
      this.nextSong();
      this.play();
      this.secondsElapsed = this.currentSong.duration;

    });
  }

  nextSong() {
    var rand = Math.floor((Math.random() * (this.songs.length - 1)) + 1);
    if (this.lastRand == rand) {
      rand = Math.floor((Math.random() * (this.songs.length - 1)) + 1);
    }
    this.currentSong = this.songs[rand];
    this.secondsElapsed = this.currentSong.duration;
    this.lastRand = rand;
  }

  pause() {
    this.isPlaying = false;
    if (!this.isPlaying) {
      clearInterval(this._interval);
    }
  }

  stop() {
    this.isPlaying = false;
    clearInterval(this._interval);
    this.secondsElapsed = this.currentSong.duration;
  }

  play() {
    if (!this.isPlaying) {
      this._interval = setInterval(() => {
        this.secondsElapsed--;
        if (this.secondsElapsed + 1 == 0) {
          this.nextSong();
        }
      }, 1000);
      this.isPlaying = true;
    }
  }

}
