import { FooterModule } from './shared/components/footer/footer.module';
import { PaginationModule } from './shared/components/pagination/pagination.module';
import { CardModule } from './shared/components/card/card.module';
import { PageTitleModule } from './shared/components/page-title/page-title.module';
import { HeaderModule } from './shared/components/header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { ComicsComponent } from './pages/comics/comics.component';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    ComicsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    PageTitleModule,
    CardModule,
    PaginationModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
