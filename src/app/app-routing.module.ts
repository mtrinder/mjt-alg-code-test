import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumeComponent } from './consume/consume.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'people-list', component: ConsumeComponent },
  { path: 'app-about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
