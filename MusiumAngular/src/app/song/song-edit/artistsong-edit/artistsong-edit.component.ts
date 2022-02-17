import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Artist } from 'src/app/artist/artist.model';
import { ArtistService } from 'src/app/artist/artist.service';

@Component({
  selector: 'app-artistsong-edit',
  templateUrl: './artistsong-edit.component.html',
  styleUrls: ['./artistsong-edit.component.scss']
})
export class ArtistsongEditComponent implements OnInit {
  @Output() artistsEvent = new EventEmitter<Artist[]>();
  artistsSong!: Artist[];
  allArtists!: Artist[];
  @Input() set songId(id: number) {
    if (id != null) {
      this._artistService.getBySongId(id).subscribe(a => this.artistsSong = a);
    }
    else {
      this.artistsSong = [];
    }
  }
  isEditing = false;
  artistName!: string;

  constructor(private _artistService: ArtistService) { }

  ngOnInit(): void {
    this._artistService.getAll().subscribe(artist => this.allArtists = artist);
  }

  removeArtist(artist: Artist) {
    let index = this.artistsSong.indexOf(artist);
    this.artistsSong.splice(index, 1);
    console.log(artist.name + " removed.")
    this.artistsEvent.emit(this.artistsSong);
  }

  findArtist(artist: string): Artist | null {
    let art = this.allArtists.find(a => a.name === artist);
    if (art) {
      return art;
    }
    return null;
  }

  clicked() {
    let art = this.findArtist(this.artistName);
    if (art != null && (this.artistsSong.find(a => a.name === this.artistName) == null)) {
      this.artistsSong.push(art);
      console.log(art.name + " added.");
      console.log(this.artistsSong);
      this.artistsEvent.emit(this.artistsSong);
    }
    this.artistName = "";
  }

}
