import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSignInModule } from '../../dist/ngx-mat-authorization';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSignInModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
