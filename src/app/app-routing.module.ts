import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ItemComponent } from './pages/item/item.component';
import { AboutComponent } from './pages/about/about.component';
import { ResultsComponent } from './pages/results/results.component';

const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'about', component: AboutComponent },
  { path: 'result/:patern', component: ResultsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
