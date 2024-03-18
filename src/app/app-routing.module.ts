import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "core",
    //component: CoreComponent,
    loadChildren: () => import("./pages/core/core.module").then((m) => m.CoreModule)
  }
   
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      useHash: true,
    })],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}