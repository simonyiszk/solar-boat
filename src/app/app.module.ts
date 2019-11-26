import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {IntroductionComponent} from './pages/landing/introduction/introduction.component';
import {FooterComponent} from './components/footer/footer.component';
import {NewsComponent} from './pages/landing/news/news.component';
import { LandingPageComponent } from './pages/landing/page/landing-page.component';
import {SponsorPageComponent} from './pages/sponsors/page/sponsor-page.component';
import { AboutPageComponent } from './pages/about/page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroductionComponent,
    FooterComponent,
    NewsComponent,
    LandingPageComponent,
    SponsorPageComponent,
    AboutPageComponent
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
