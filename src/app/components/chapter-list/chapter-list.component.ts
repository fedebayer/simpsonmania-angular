import { Component, OnInit } from '@angular/core';
import { Chapter } from 'src/app/model/chapter';
import { ChapterScoresService } from 'src/app/services/chapter-scores.service';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css'],
})
export class ChapterListComponent implements OnInit {
  chapters: Chapter[] = [
    {
      name: 'chapter1',
      season: 1,
      premiere: '12/12/2022',
      screenwriter: 'John Swartzwelder',
      director: 'director1',
      gag: 'gag1',
      image:
        'http://disneyplusbrasil.com.br/wp-content/uploads/2022/01/Os-Simpsons-Disney-Plus-1024x576.jpg',
      score: 0,
    },
    {
      name: 'chapter2',
      season: 30,
      premiere: 'premiere2',
      screenwriter: 'screenwriter2',
      director: 'director2',
      gag: 'gag2',
      image:
        'https://i.ds.at/mKqDzA/rs:fill:750:0/plain/2021/07/01/BART-UND-LOKI.-ZWEI-GLORREICHE-HALUNKENDisney.jpg',
      score: 0,
    },
    {
      name: 'chapter3',
      season: 23,
      premiere: 'premiere3',
      screenwriter: 'screenwriter3',
      director: 'director3',
      gag: 'gag3',
      image:
        'https://lumiere-a.akamaihd.net/v1/images/simpsons_s33_social_16x9_1920x1080_en_v1_xxxxxx_395a8f3b.png?region=0,156,1920,768',
      score: 0,
    },
    {
      name: 'chapter4',
      season: 10,
      premiere: 'premiere4',
      screenwriter: 'screenwriter4',
      director: 'director4',
      gag: 'gag4',
      image:
        'https://sm.ign.com/ign_es/news/a/all-30-sea/all-30-seasons-of-the-simpsons-coming-to-disney-at-launch_16k7.png',
      score: 0,
    },
  ];

  startPointForNewSeasons = 30;

  constructor(private chapterScores: ChapterScoresService) {}

  ngOnInit(): void {}

  addToChapterScores(chapter: Chapter): void {
    this.chapterScores.addToChapterScores(chapter);
  }

  maxReached(m: String) {
    alert(m);
  }
}
