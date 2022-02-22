import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

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
import { ArtistDetailComponent } from './artist/artist-detail/artist-detail.component';
import { ArtistEditComponent } from './artist/artist-edit/artist-edit.component';
import { DurationPipe } from './jukebox/duration.pipe';
import { TokenInterceptorService } from './auth/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    SongComponent,
    ArtistComponent,
    ArtistsongComponent,
    ArtistDetailComponent,
    ArtistEditComponent,
    SongEditComponent,
    SongDetailComponent,
    ArtistsongEditComponent,
    JukeboxComponent,
    LoginComponent,
    RegisterComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{ provide : HTTP_INTERCEPTORS, useClass : TokenInterceptorService, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
