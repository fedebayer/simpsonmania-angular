import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Chapter } from '../model/chapter';

const URL = 'https://637e62e75b1cc8d6f92ce70d.mockapi.io/chapters';

@Injectable({
  providedIn: 'root',
})
export class ChapterDataService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Chapter[]> {
    return this.http
      .get<Chapter[]>(URL)
      .pipe(
        tap((chapters: Chapter[]) =>
          chapters.forEach((chapter) => (chapter.score = 0))
        )
      );
  }

  public addChapter(chapter: Chapter): Observable<Chapter> {
    return this.http.post<Chapter>(URL, chapter);
  }

  public deleteById(id: number): Observable<Chapter> {
    return this.http.delete<Chapter>(URL + `/${id}`);
  }
}
