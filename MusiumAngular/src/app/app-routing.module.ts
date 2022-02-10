import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SongDetailComponent } from './song/song-detail/song-detail.component';
import { SongEditComponent } from './song/song-edit/song-edit.component';
import { SongComponent } from './song/song.component';

const routes: Routes = [
  {
    path: 'songlist', component: SongComponent, children: [
      { path: ':id/details', component: SongDetailComponent },
      { path: ':id/edit', component: SongEditComponent },
      { path: 'add', component: SongEditComponent }
    ]
  },
  { path: 'artistlist', component: ArtistComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
