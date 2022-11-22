import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChapterListComponent } from './components/chapter-list/chapter-list.component';
import { ChaptersPageComponent } from './components/chapters-page/chapters-page.component';
import { SuggestChapterComponent } from './components/suggest-chapter/suggest-chapter.component';
import { SoloSeMudaDosVecesComponent } from './components/solo-se-muda-dos-veces/solo-se-muda-dos-veces.component';
import { CasitaDelHorrorVIIComponent } from './components/casita-del-horror-vii/casita-del-horror-vii.component';

@NgModule({
  declarations: [AppComponent, ChapterListComponent, ChaptersPageComponent, SuggestChapterComponent, SoloSeMudaDosVecesComponent, CasitaDelHorrorVIIComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
