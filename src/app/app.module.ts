import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { InscriptionComponent } from './page/inscription/inscription.component';
import { FAQComponent } from './page/faq/faq.component';
import { StatistiqueComponent } from './page/statistique/statistique.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { PortfolioComponent } from './page/portfolio/portfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    InscriptionComponent,
    FAQComponent,
    StatistiqueComponent,
    PageNotFoundComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
