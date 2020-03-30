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

import { SparkComponent } from './spark/spark.component';
import { NetworkComponent } from './network/network.component';
import { EruptionComponent } from './eruption/eruption.component';
import { IslandComponent } from './island/island.component';

import { SparkPostComponent } from './spark-post/spark-post.component';
import { NetworkPostComponent } from './network-post/network-post.component';
import { EruptionPostComponent } from './eruption-post/eruption-post.component';

import { RLsEssayComponent } from './rls-essay/rls-essay.component';

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
    SparkComponent,
    NetworkComponent,
    EruptionComponent,
    IslandComponent,
    SparkPostComponent,
    EruptionPostComponent,
    NetworkPostComponent,
    RLsEssayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
