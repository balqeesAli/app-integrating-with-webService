import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewpagePageRoutingModule } from './newpage-routing.module';

import { NewpagePage } from './newpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewpagePageRoutingModule
  ],
  declarations: [NewpagePage]
})
export class NewpagePageModule {}
