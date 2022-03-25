import { CardModule } from './shared/components/card/card.module';
import { PageTitleModule } from './shared/components/page-title/page-title.module';
import { HeaderModule } from './shared/components/header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { PageTitleComponent } from './shared/components/page-title/page-title.component';
import { CardComponent } from './shared/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    PageTitleModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
