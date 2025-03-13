import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { PageRoutingModule } from './pages.routing.module';



@NgModule({
  imports: [
    CommonModule, PageRoutingModule
  ],
  declarations: [PageComponent]
})
export class PageModule { }
