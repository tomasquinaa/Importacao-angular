import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportacaoListComponent } from './shared/importacao-list/importacao-list.component';
import { ImportacaoListAddComponent } from './shared/importacao-list-add/importacao-list-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ImportacaoListComponent,
    ImportacaoListAddComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
