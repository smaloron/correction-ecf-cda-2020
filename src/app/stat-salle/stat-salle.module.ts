import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatSallePageRoutingModule } from './stat-salle-routing.module';

import { StatSallePage } from './stat-salle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatSallePageRoutingModule
  ],
  declarations: [StatSallePage]
})
export class StatSallePageModule {}
