import { Component, Input, OnInit } from '@angular/core';
import { Artist } from 'src/app/artist/artist.model';
import { ArtistService } from 'src/app/artist/artist.service';

@Component({
  selector: 'app-artistsong-edit',
  templateUrl: './artistsong-edit.component.html',
  styleUrls: ['./artistsong-edit.component.scss']
})
export class ArtistsongEditComponent implements OnInit {
  artist!: Artist;
  @Input() songId!: number;
  @Input() artistId!: number;

  constructor(private _artistService: ArtistService) { }

  ngOnInit(): void {
    this._artistService.getById(this.artistId).subscribe(a => this.artist = a);
  }
}
