import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalysisComponent } from './analysis/analysis.component';
import { GamesComponent } from './games/games.component';
import { PostmortemsComponent } from './postmortems/postmortems.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { ArtComponent } from './art/art.component';

import { SparkComponent } from './spark/spark.component';
import { NetworkComponent } from './network/network.component';
import { EruptionComponent } from './eruption/eruption.component';
import { IslandComponent } from './island/island.component';

import { SparkPostComponent } from './spark-post/spark-post.component';
import { NetworkPostComponent } from './network-post/network-post.component';
import { EruptionPostComponent } from './eruption-post/eruption-post.component';

import { RLsEssayComponent } from './rls-essay/rls-essay.component';
import { KatanaZeroComponent } from './katana-zero/katana-zero.component';
import { BabaIsYouComponent } from './baba-is-you/baba-is-you.component';

import { RaidConceptComponent } from './raid-concept/raid-concept.component';
import { Armor25Component } from './armor-25/armor-25.component';

import { ModellingComponent } from './modelling/modelling.component';
import { ModellingGalleryComponent } from './modelling-gallery/modelling-gallery.component';

import { DrawingComponent } from './drawing/drawing.component';
import { DrawingGalleryComponent } from './drawing-gallery/drawing-gallery.component';

import { PixelComponent } from './pixel/pixel.component';
import { PixelGalleryComponent } from './pixel-gallery/pixel-gallery.component';

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
    { path: 'roguelikes', component: RLsEssayComponent, data: {animation: 'rlsessay'} },
    { path: 'katana', component: KatanaZeroComponent, data: {animation: 'katana'} },
    { path: 'baba', component: BabaIsYouComponent, data: {animation: 'baba'} }
  ]},
  { path: 'concepts', component: ConceptsComponent, data: {animation: 'concepts'},
  children:[
    { path: 'armor25', component: Armor25Component, data: {animation: 'armor25'} },
    { path: 'raid', component: RaidConceptComponent, data: {animation: 'raid'} }
  ]},
  { path: 'art', component: ArtComponent, data: {animation: 'art'},
  children:[
    { path: 'models', component: ModellingComponent, data: {animation: 'modelling'},
    children: [
      { path: 'modellinggallery', component: ModellingGalleryComponent, data: {animation: 'modellinggallery'} }
    ]},
    { path: 'drawing', component: DrawingComponent, data: {animation: 'drawing'},
    children: [
      { path: 'drawinggallery', component: DrawingGalleryComponent, data: {animation: 'drawinggallery'} }
    ]},
    { path: 'pixel', component: PixelComponent, data: {animation: 'pixel'},
    children:[
      { path: 'pixelgallery', component: PixelGalleryComponent, data: {animation: 'pixelgallery'} }
    ]}
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
