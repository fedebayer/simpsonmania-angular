import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Chapter } from 'src/app/model/chapter';
import { ChapterDataService } from 'src/app/services/chapter-data.service';

@Component({
  selector: 'app-suggest-chapter',
  templateUrl: './suggest-chapter.component.html',
  styleUrls: ['./suggest-chapter.component.css'],
})
export class SuggestChapterComponent implements OnInit {
  constructor(private chapterDataService: ChapterDataService) {}

  ngOnInit(): void {}

  public addChapter(addForm: NgForm): void {
    this.chapterDataService.addChapter(addForm.value).subscribe(
      (response: Chapter) => {
        console.log(response);
        window.location.href = 'http://localhost:4200/chapters';
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
}
