import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './component/app.component';
import { DrawerComponent } from './component/drawer/drawer.component';

import { IndexerService } from './service/indexer.service';

@NgModule({
  declarations: [
    AppComponent,
    DrawerComponent
  ],
  imports: [
    HttpModule, 
    FormsModule,
    BrowserModule
  ],
  providers: [IndexerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
