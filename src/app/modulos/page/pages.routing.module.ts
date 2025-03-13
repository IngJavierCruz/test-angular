import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page.component';
import { DetalleComponent } from './components/detalle/detalle.component';

const routes: Routes = [
  {
    path: "",
    component: PageComponent,
  },
  {
    path: "detalle",
    component: DetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
