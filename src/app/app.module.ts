import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { PostmortemsComponent } from './postmortems/postmortems.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
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

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    AnalysisComponent,
    PostmortemsComponent,
    HomeComponent,
    AboutComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    ConceptsComponent,
    ArtComponent,
    SparkComponent,
    NetworkComponent,
    EruptionComponent,
    IslandComponent,
    SparkPostComponent,
    EruptionPostComponent,
    NetworkPostComponent,
    RLsEssayComponent,
    KatanaZeroComponent,
    BabaIsYouComponent,
    RaidConceptComponent,
    Armor25Component,
    ModellingComponent,
    ModellingGalleryComponent,
    DrawingComponent,
    DrawingGalleryComponent,
    PixelComponent,
    PixelGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
