import { RouterModule, Routes } from "@angular/router";
import { CoreComponent } from "./core.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: "",
        component: CoreComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class CoreRoutingModule {}