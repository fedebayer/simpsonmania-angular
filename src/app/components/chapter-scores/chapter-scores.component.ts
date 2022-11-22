import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Chapter } from 'src/app/model/chapter';
import { ChapterScoresService } from 'src/app/services/chapter-scores.service';

@Component({
  selector: 'app-chapter-scores',
  templateUrl: './chapter-scores.component.html',
  styleUrls: ['./chapter-scores.component.css'],
})
export class ChapterScoresComponent implements OnInit {
  chapterScoresList$!: Observable<Chapter[]>;
  constructor(private chapterScores: ChapterScoresService) {
    this.chapterScoresList$ = chapterScores.chapterScoresList.asObservable();
  }

  ngOnInit(): void {}
}
