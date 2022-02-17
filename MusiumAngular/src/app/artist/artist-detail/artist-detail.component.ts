import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Artist } from 'src/app/artist/artist.model';
import { ArtistService } from 'src/app/artist/artist.service';


@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {
  artistDetail!: Artist;
  id!: number;
  public artists: Array<Artist> = [];

  constructor(private _artistService: ArtistService,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.artistDetail = new Artist();
    this._route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this._artistService.getById(this.id).subscribe(a => this.artistDetail = a);
      });
  }
}
