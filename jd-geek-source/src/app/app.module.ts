import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BatmanComponent } from './components/batman/batman.component';
import { TestDiplayComponent } from './components/test-diplay/test-diplay.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    BatmanComponent,
    TestDiplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
