import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { DetailComponent } from './song/detail/detail.component';
import { SongComponent } from './song/song.component';

const routes: Routes = [
  { path: '', redirectTo: '/songlist', pathMatch: 'full' },
  {
    path: 'songlist', component: SongComponent, children: [
      { path: ':id/details', component: DetailComponent }
    ]
  },
  { path: 'artistlist', component: ArtistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
