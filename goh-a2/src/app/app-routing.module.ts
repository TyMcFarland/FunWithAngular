import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HerolistComponent } from './herolist/herolist.component';
import { HerodetailComponent } from './herodetail/herodetail.component';

const routes: Routes = [
  {
    path: '',
    component: HerolistComponent,
    children: []
  },
  {
    path: 'detail/:id',
    component: HerodetailComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
