import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerolistComponent } from './herolist/herolist.component';

import { HerolistService } from './herolist/service/herolist.service';
import { HerodetailComponent } from './herodetail/herodetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HerolistComponent,
    HerodetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [HerolistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
