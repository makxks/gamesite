import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalysisComponent } from './analysis/analysis.component';
import { GamesComponent } from './games/games.component';
import { PostmortemsComponent } from './postmortems/postmortems.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConceptsComponent } from './concepts/concepts.component';

import { SparkComponent } from './spark/spark.component';
import { NetworkComponent } from './network/network.component';
import { EruptionComponent } from './eruption/eruption.component';
import { IslandComponent } from './island/island.component';

import { SparkPostComponent } from './spark-post/spark-post.component';
import { NetworkPostComponent } from './network-post/network-post.component';
import { EruptionPostComponent } from './eruption-post/eruption-post.component';

import { RLsEssayComponent } from './rls-essay/rls-essay.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'main'} },
  { path: 'games', component: GamesComponent, data: {animation: 'games'},
  children: [
    { path: 'spark', component: SparkComponent, data: {animation: 'spark'} },
    { path: 'network', component: NetworkComponent, data: {animation: 'network'} },
    { path: 'island', component: IslandComponent, data: {animation: 'island'} },
    { path: 'eruption', component: EruptionComponent, data: {animation: 'eruption'} }
  ]},
  { path: 'analysis', component: AnalysisComponent, data: {animation: 'analysis'},
  children: [
    { path: 'roguelikes', component: RLsEssayComponent, data: {animation: 'rlsessay'} }
  ]},
  { path: 'concepts', component: ConceptsComponent, data: {animation: 'concepts'},
  children:[

  ]},
  { path: 'postmortems', component: PostmortemsComponent, data: {animation: 'postmortems'},
  children:[
    { path: 'spark', component: SparkPostComponent, data: {animation: 'spark'} },
    { path: 'network', component: NetworkPostComponent, data: {animation: 'network'} },
    { path: 'eruption', component: EruptionPostComponent, data: {animation: 'eruption'} }
  ]},
  { path: 'about', component: AboutComponent, data: {animation: 'about'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
