import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPagesComponent } from './main-pages/main-pages.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: MainPagesComponent, loadChildren: () => import('./main-pages/main-pages.module').then(m => m.MainPagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
