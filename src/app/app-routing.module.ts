import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingPageComponent} from './pages/landing/page/landing-page.component';
import {SponsorPageComponent} from './pages/sponsors/page/sponsor-page.component';
import {AboutPageComponent} from './pages/about/page/about-page.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'sponsors', component: SponsorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
