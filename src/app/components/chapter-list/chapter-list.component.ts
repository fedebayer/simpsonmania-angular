import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chapter } from 'src/app/model/chapter';
import { ChapterDataService } from 'src/app/services/chapter-data.service';
import { ChapterScoresService } from 'src/app/services/chapter-scores.service';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css'],
})
export class ChapterListComponent implements OnInit {
  chapters: Chapter[] = [];

  startPointForNewSeasons = 30;

  constructor(
    private chapterScores: ChapterScoresService,
    private chapterDataService: ChapterDataService
  ) {}

  ngOnInit(): void {
    this.chapterDataService
      .getAll()
      .subscribe((chapters) => (this.chapters = chapters));
  }

  public reloadList() {
    this.chapterDataService
      .getAll()
      .subscribe((chapters) => (this.chapters = chapters));
  }

  addToChapterScores(chapter: Chapter): void {
    this.chapterScores.addToChapterScores(chapter);
  }

  deleteChapter(id: number): void {
    this.chapterDataService.deleteById(id).subscribe(
      (response: Chapter) => {
        console.log(response);
        this.reloadList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  maxReached(m: String) {
    alert(m);
  }
}
