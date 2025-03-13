import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { PageRoutingModule } from './pages.routing.module';
import { DetalleComponent } from './components/detalle/detalle.component';



@NgModule({
  imports: [
    CommonModule, PageRoutingModule
  ],
  declarations: [PageComponent, DetalleComponent]
})
export class PageModule { }
