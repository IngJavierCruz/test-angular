import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: "auth",
    loadChildren: () => import("./modulos/auth/auth.module").then(x => x.AuthModule)
  },
  {
    path: "page",
    loadChildren: () => import("./modulos/page/page.module").then(x => x.PageModule)
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
