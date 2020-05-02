import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewpagePage } from './newpage.page';

const routes: Routes = [
  {
    path: '',
    component: NewpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewpagePageRoutingModule {}
