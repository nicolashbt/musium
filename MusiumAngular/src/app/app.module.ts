import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SongComponent } from './song/song.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistsongComponent } from './song/artistsong/artistsong.component';
import { SongEditComponent } from './song/song-edit/song-edit.component';
import { SongDetailComponent } from './song/song-detail/song-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArtistsongEditComponent } from './song/song-edit/artistsong-edit/artistsong-edit.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SongComponent,
    ArtistComponent,
    ArtistsongComponent,
    SongEditComponent,
    SongDetailComponent,
    ArtistsongEditComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
