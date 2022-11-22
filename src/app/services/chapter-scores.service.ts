import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Chapter } from '../model/chapter';

@Injectable({
  providedIn: 'root',
})
export class ChapterScoresService {
  private _chapterScoresList: Chapter[] = [];
  chapterScoresList: BehaviorSubject<Chapter[]> = new BehaviorSubject(
    this._chapterScoresList
  );

  constructor() {}

  addToChapterScores(chapter: Chapter) {
    let item: Chapter | undefined = this._chapterScoresList.find(
      (c) => c.name === chapter.name
    );
    if (!item) {
      this._chapterScoresList.push({ ...chapter });
    } else {
      item.score = chapter.score;
    }
    console.log(this._chapterScoresList);
    this.chapterScoresList.next(this._chapterScoresList);
  }
}
