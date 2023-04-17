import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeadderComponent } from './headder/headder.component';
import { LeagueComponent } from './league/league.component';
import { PlayerComponent } from './player/player.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NewsComponent } from './news/news.component'

@NgModule({
  declarations: [
    AppComponent,
    HeadderComponent,
    LeagueComponent,
    PlayerComponent,
    NavMenuComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
