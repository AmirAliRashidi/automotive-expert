import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BaseRoutingModule } from './base-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class BaseModule { }
