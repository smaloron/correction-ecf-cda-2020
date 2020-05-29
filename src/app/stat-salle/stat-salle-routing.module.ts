import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatSallePage } from './stat-salle.page';

const routes: Routes = [
  {
    path: '',
    component: StatSallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatSallePageRoutingModule {}
