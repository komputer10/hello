import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPagesComponent } from './main-pages.component';
import { HeaderComponent } from './children/header/header.component';
import { FooterComponent } from './children/footer/footer.component';

const mainPagesRouting: Routes = [
  {
    path: '',
    component: MainPagesComponent
  },
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainPagesComponent
  ],
  exports: [
    RouterModule, 
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainPagesRouting),
  ],
})
export class MainPagesModule { };
