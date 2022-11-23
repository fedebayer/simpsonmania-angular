import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chapter2Season8Component } from './components/chapter-2-season-8/chapter-2-season-8.component';
import { Chapter4Season9Component } from './components/chapter-4-season-9/chapter-4-season-9.component';
import { ChaptersPageComponent } from './components/chapters-page/chapters-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'chapters', pathMatch: 'full' },
  { path: 'chapters', component: ChaptersPageComponent },
  { path: 'chapter-2-season-8', component: Chapter2Season8Component },
  { path: 'chapter-4-season-9', component: Chapter4Season9Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
