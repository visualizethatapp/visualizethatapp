import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeBannerComponent } from './ui-kit/home-banner/home-banner.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PortfolioCardsComponent } from './ui-kit/portfolio-cards/portfolio-cards.component';
import { AboutSnippetComponent } from './ui-kit/about-snippet/about-snippet.component';
import { FooterComponent } from './ui-kit/footer/footer.component';
import { NavComponent } from './ui-kit/nav/nav.component';
import { HeaderComponent } from './ui-kit/header/header.component';
import { BlogCardComponent } from './ui-kit/blog-card/blog-card.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { PhephoFarmerPageComponent } from './pages/phepho-farmer-page/phepho-farmer-page.component';
import { KidszatravelPageComponent } from './pages/kidszatravel-page/kidszatravel-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeBannerComponent,
    HomePageComponent,
    PortfolioCardsComponent,
    AboutSnippetComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    BlogCardComponent,
    BlogPageComponent,
    PortfolioPageComponent,
    PhephoFarmerPageComponent,
    KidszatravelPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
