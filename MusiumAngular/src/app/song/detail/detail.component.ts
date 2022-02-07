import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Artist } from 'src/app/artist/artist.model';
import { ArtistService } from 'src/app/artist/artist.service';
import { Song } from '../song.model';
import { SongService } from '../song.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  songDetail!: Song;
  id!: number;
  public artists: Array<Artist> = [];

  constructor(private _songService: SongService,
    private _artistService:ArtistService,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this._songService.getById(this.id).subscribe( s => this.songDetail = s);
        this._artistService.getBySongId(this.id).subscribe(a => this.artists = a);
      });
      
  }

}
