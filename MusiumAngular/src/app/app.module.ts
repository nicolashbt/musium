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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtistsongEditComponent } from './song/song-edit/artistsong-edit/artistsong-edit.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { IndexComponent } from './index/index.component';
import { JukeboxComponent } from './jukebox/jukebox.component';

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
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    JukeboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
