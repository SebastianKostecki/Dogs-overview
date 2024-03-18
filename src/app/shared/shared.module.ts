import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TitleComponent } from './components/title/title.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    ToolbarComponent,
    TitleComponent,
    ContentCardComponent,
    
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    ToolbarComponent,
    TitleComponent,
    ContentCardComponent,

  ]
})
export class SharedModule { }
