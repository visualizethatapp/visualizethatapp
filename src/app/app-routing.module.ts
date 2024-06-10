import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PhephoFarmerPageComponent } from './pages/phepho-farmer-page/phepho-farmer-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'phepho-farmers', component: PhephoFarmerPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
