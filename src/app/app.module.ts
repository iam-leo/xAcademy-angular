import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Material
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
