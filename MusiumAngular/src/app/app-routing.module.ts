import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailComponent } from './artist/artist-detail/artist-detail.component';
import { ArtistEditComponent } from './artist/artist-edit/artist-edit.component';
import { ArtistComponent } from './artist/artist.component';
import { AdminGuard } from './auth/admin.guard';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { IndexComponent } from './index/index.component';
import { JukeboxComponent } from './jukebox/jukebox.component';
import { SongDetailComponent } from './song/song-detail/song-detail.component';
import { SongEditComponent } from './song/song-edit/song-edit.component';
import { SongComponent } from './song/song.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  {
    // path: 'songlist', component: SongComponent, children: [
      path: 'songlist', component: SongComponent, canActivate: [AdminGuard], children: [
      { path: ':id/details', component: SongDetailComponent },
      { path: ':id/edit', component: SongEditComponent },
      { path: 'add', component: SongEditComponent }
    ]
  },  
  {
    // path: 'artistlist', component: ArtistComponent, children: [
      path: 'artistlist', component: ArtistComponent, canActivate: [AdminGuard], children: [
      { path: ':id/details', component: ArtistDetailComponent },
      { path: ':id/edit', component: ArtistEditComponent },
      { path: 'add', component: ArtistEditComponent }
    ]
  },
  // { path: 'jukebox', component: JukeboxComponent},
  { path: 'jukebox', component: JukeboxComponent, canActivate: [AuthGuard] },
  { path: 'artistlist', component: ArtistComponent, canActivate: [AdminGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
