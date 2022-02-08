import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { SongDetailComponent } from './song/song-detail/song-detail.component';
import { SongEditComponent } from './song/song-edit/song-edit.component';
import { SongComponent } from './song/song.component';

const routes: Routes = [
  { path: '', redirectTo: '/songlist', pathMatch: 'full' },
  {
    path: 'songlist', component: SongComponent, children: [
      { path: ':id/details', component: SongDetailComponent },
      { path: ':id/edit', component: SongEditComponent }
    ]
  },
  { path: 'artistlist', component: ArtistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
