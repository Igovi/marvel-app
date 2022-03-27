import { CreatorsComponent } from './pages/creators/creators.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'comics',
    component: ComicsComponent
  },
  {
    path: 'creators',
    component: CreatorsComponent
  },
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  {
    path: 'comics',
    redirectTo: 'comics',
    pathMatch: 'full'
  },
  {
    path: 'creators',
    redirectTo: 'creators',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
