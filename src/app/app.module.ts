import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {IntroductionComponent} from './introduction/introduction.component';
import {FooterComponent} from './footer/footer.component';
import {NewsComponent} from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroductionComponent,
    FooterComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
