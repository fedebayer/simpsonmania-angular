import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasitaDelHorrorVIIComponent } from './components/casita-del-horror-vii/casita-del-horror-vii.component';
import { ChaptersPageComponent } from './components/chapters-page/chapters-page.component';
import { SoloSeMudaDosVecesComponent } from './components/solo-se-muda-dos-veces/solo-se-muda-dos-veces.component';

const routes: Routes = [
  { path: '', redirectTo: 'chapters', pathMatch: 'full' },
  { path: 'chapters', component: ChaptersPageComponent },
  { path: 'soloSeMudaDosVeces', component: SoloSeMudaDosVecesComponent },
  { path: 'casitaDelHorrorVII', component: CasitaDelHorrorVIIComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
