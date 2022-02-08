import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Params } from '@angular/router';
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

  isEditing = true;
  songForm: FormGroup = new FormGroup({
    'name': new FormControl(""),
    'filePath': new FormControl(""),
    'duration': new FormControl(""),
    'genreId': new FormControl("")
  });

  id!: number;
  songDetail!: Song;
  artists: Array<Artist> = [];


  constructor(private _songService: SongService,
    private _artistService: ArtistService,
    private _route: ActivatedRoute) { }

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
      });
  }

  initForm() {
    this.songForm.patchValue({
      name: this.songDetail.name,
      filePath: this.songDetail.filePath,
      duration: this.songDetail.duration,
      genrId: this.songDetail.genreId
    });
    //TODO add other fields
  }

  onSubmit() {
    if (this.isEditing) {
      this._songService.edit(this.songForm);
    } else {
      this._songService.add(this.songForm);
    }
  }


}
