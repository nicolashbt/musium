import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { SongComponent } from './song/song.component';

const routes: Routes = [
  {path: 'songlist', component:SongComponent},
  {path: 'artistlist', component:ArtistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
