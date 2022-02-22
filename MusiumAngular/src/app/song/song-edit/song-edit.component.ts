import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Artist } from 'src/app/artist/artist.model';
import { ArtistService } from 'src/app/artist/artist.service';
import { Song } from '../song.model';
import { SongService } from '../song.service';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.scss']
})
export class SongEditComponent implements OnInit {
  submittedFlag = false;
  get form(): { [key: string]: AbstractControl; } {
    return this.songForm.controls;
  }
  isEditing = true;
  songForm: FormGroup = new FormGroup({
    'id': new FormControl(""),
    'name': new FormControl("", [Validators.required]),
    'filePath': new FormControl(""),
    'duration': new FormControl("", [Validators.pattern(/^[0-9]\d*$/), Validators.min(1)]),
    'genreId': new FormControl(""),
    'isActive': new FormControl(""),
    'artistIds': new FormControl("")
  });

  id!: number;
  songDetail!: Song;
  artists: Array<Artist> = [];
  artistsToSave: Array<Artist> = [];
  artistIds!: Array<Number>;

  constructor(private _songService: SongService,
    private _artistService: ArtistService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.songDetail = new Song();
    this._route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        if (this.id != null) {
          this._songService.getById(this.id).subscribe({ next: s => this.songDetail = s, complete: () => this.initForm() });
          this._artistService.getBySongId(this.id).subscribe(a => this.artists = a);
        }
        else {
          this.isEditing = false;
          this.songDetail = new Song();
          this.initForm();
        }
        this._songService.refreshList.subscribe();
      });
  }

  initForm() {
    this.songForm.patchValue({
      id: this.id,
      name: this.songDetail.name,
      filePath: this.songDetail.filePath,
      duration: this.songDetail.duration,
      genreId: this.songDetail.genreId,
      isActive: this.songDetail.isActive
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
    this.submittedFlag = true;
    if (this.isEditing) {
      if (this.songForm.valid) {
        this.songForm.patchValue({ artistIds: this.onlyIds(this.artistsToSave) });
        this._songService.update(this.songForm.value).subscribe({
          next: (r) => {
            console.log(r);
            this._router.navigateByUrl("/songlist/" + this.id + "/details");
            this._songService.refreshList.next(true);
            this.submittedFlag = false;
          },
          error: (e) => console.log(e),
        });
      }
    } else {
      if (this.songForm.valid) {
        this.songForm.patchValue({ artistIds: this.onlyIds(this.artistsToSave) });
        this._songService.add(this.songForm.value).subscribe({
          next: (r) => {
            console.log(r);
            this._songService.refreshList.next(true);
            this._router.navigateByUrl("/songlist");
            this.submittedFlag = false;
          },
          error: (e) => console.log(e),
        });
      }
    }
  }

  saveTheArtists(artists: Artist[]) {
    this.artistsToSave = artists;
  }
}
