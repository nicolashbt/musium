import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Artist } from 'src/app/artist/artist.model';
import { ArtistService } from 'src/app/artist/artist.service';


@Component({
  selector: 'app-artist-edit',
  templateUrl: './artist-edit.component.html',
  styleUrls: ['./artist-edit.component.scss']
})
export class ArtistEditComponent implements OnInit {

  isEditing = true;
  artistForm: FormGroup = new FormGroup({
    'id': new FormControl(""),
    'name': new FormControl(""),
  });

  id!: number;
  artistDetail!: Artist;
  artists: Array<Artist> = [];
  artistIds!: Array<Number>;

  constructor(private _artistService: ArtistService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.artistDetail = new Artist();
    this._route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        if (this.id != null) {
          this._artistService.getById(this.id).subscribe({ next: a => this.artistDetail = a, complete: () => this.initForm() });
        }
        else {
          this.isEditing = false;
          this.artistDetail = new Artist();
          this.initForm();
        }
        this._artistService.refreshList.subscribe();
      });
  }

  initForm() {
    this.artistForm.patchValue({
      id: this.id,
      name: this.artistDetail.name
    });
  }

  onlyIds(artists: Array<Artist>): Array<number> {
    let artistIds: Array<number> = [];
    for (let a of artists) {
      artistIds.push(a.id);
    }
    return artistIds;
  }

  onSubmit() {
    if (this.isEditing) {
      this.artistForm.patchValue({ artistIds: this.onlyIds(this.artists) });
      this._artistService.update(this.artistForm.value).subscribe({
        next: (r) => {
          console.log(r);
          this._router.navigateByUrl("/artistlist/" + this.id + "/details");
          this._artistService.refreshList.next(true);
        },
        error: (e) => console.log(e),
      });
    } else {
      this._artistService.add(this.artistForm.value).subscribe({
        next: (r) => {
          // this.artistForm.reset();
          console.log(this.artistForm.value);
          console.log(r);
          this._artistService.refreshList.next(true);
          this.ngOnInit();
          // this._router.navigateByUrl("/artistlist/" + this.id + "/details");
          // this._router.navigateByUrl("/artistlist/add");
        },
        error: (e) => console.log(e),
      });
    }
  }

  saveTheArtists(artists: Artist[]) {
    this.artists = artists;
  }
}
