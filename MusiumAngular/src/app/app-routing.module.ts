import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { IndexComponent } from './index/index.component';
import { SongDetailComponent } from './song/song-detail/song-detail.component';
import { SongEditComponent } from './song/song-edit/song-edit.component';
import { SongComponent } from './song/song.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  {
    path: 'songlist', component: SongComponent, canActivate: [AuthGuard], children: [
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
