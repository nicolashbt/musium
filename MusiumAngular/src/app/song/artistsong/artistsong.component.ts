import { Component, Input, OnInit } from '@angular/core';
import { Artist } from 'src/app/artist/artist.model';
import { ArtistService } from 'src/app/artist/artist.service';

@Component({
  selector: 'app-artistsong',
  templateUrl: './artistsong.component.html'
})
export class ArtistsongComponent implements OnInit {
  public artists: Array<Artist> = [];

  @Input() songId!: number;

  constructor(private _artistService: ArtistService) { }

  ngOnInit(): void {
    this._artistService.getBySongId(this.songId).subscribe(a => this.artists = a);
  }

}
