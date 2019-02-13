import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'detail', component: DetailComponent},
  {path: 'home', component: HomeComponent},
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/search',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
