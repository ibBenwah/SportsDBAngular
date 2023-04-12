import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueComponent } from './league/league.component';
import { NewsComponent } from './news/news.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  {path: 'league', component: LeagueComponent},
  {path: 'player', component: PlayerComponent},
  {path: 'news', component: NewsComponent},
  {path: '', component: NewsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
