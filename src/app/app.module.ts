import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from "./shared/shared.module";


@NgModule({
    declarations: [AppComponent],
    imports:[
      BrowserModule, 
      AppRoutingModule, 
      SharedModule,
    ],
    bootstrap: [AppComponent],
    providers: [
      provideAnimationsAsync()
    ]
})
export class AppModule {}