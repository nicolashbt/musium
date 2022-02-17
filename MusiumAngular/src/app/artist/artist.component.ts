import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from './artist.model';
import { ArtistService } from './artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  public artists: Array<Artist> = [];

  constructor(private _artistService: ArtistService,
    private _router:Router) { }

  ngOnInit(): void {
    this._artistService.refreshList.subscribe(f => {
      this._artistService.getAll().subscribe(a => this.artists = a);
    });
  }  
}
