import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CasitaDelHorrorVIIComponent } from './components/casita-del-horror-vii/casita-del-horror-vii.component';
import { ChapterListComponent } from './components/chapter-list/chapter-list.component';
import { ChapterScoresComponent } from './components/chapter-scores/chapter-scores.component';
import { ChaptersPageComponent } from './components/chapters-page/chapters-page.component';
import { InputIntegerComponent } from './components/input-integer/input-integer.component';
import { SoloSeMudaDosVecesComponent } from './components/solo-se-muda-dos-veces/solo-se-muda-dos-veces.component';
import { SuggestChapterComponent } from './components/suggest-chapter/suggest-chapter.component';

@NgModule({
  declarations: [
    AppComponent,
    ChapterListComponent,
    ChaptersPageComponent,
    SuggestChapterComponent,
    SoloSeMudaDosVecesComponent,
    CasitaDelHorrorVIIComponent,
    InputIntegerComponent,
    ChapterScoresComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
