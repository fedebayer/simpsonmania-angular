import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Chapter2Season8Component } from './components/chapter-2-season-8/chapter-2-season-8.component';
import { Chapter4Season9Component } from './components/chapter-4-season-9/chapter-4-season-9.component';
import { ChapterListComponent } from './components/chapter-list/chapter-list.component';
import { ChapterScoresComponent } from './components/chapter-scores/chapter-scores.component';
import { ChaptersPageComponent } from './components/chapters-page/chapters-page.component';
import { InputIntegerComponent } from './components/input-integer/input-integer.component';
import { SuggestChapterComponent } from './components/suggest-chapter/suggest-chapter.component';

@NgModule({
  declarations: [
    AppComponent,
    ChapterListComponent,
    ChaptersPageComponent,
    SuggestChapterComponent,
    Chapter2Season8Component,
    Chapter4Season9Component,
    InputIntegerComponent,
    ChapterScoresComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
