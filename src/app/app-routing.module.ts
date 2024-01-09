import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { InscriptionComponent } from './page/inscription/inscription.component';
import { FAQComponent } from './page/faq/faq.component';
import { StatistiqueComponent} from './page/statistique/statistique.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { PortfolioComponent } from './page/portfolio/portfolio.component';

const routes: Routes = [
  { path: 'inscription/statistique',  pathMatch: 'full', component: StatistiqueComponent,},
  { path: 'inscription', pathMatch: 'full', component: InscriptionComponent },
  {path: 'portfolio', pathMatch: 'full', component: PortfolioComponent},
  { path: 'FAQ',  pathMatch: 'full', component: FAQComponent },
  { path: 'home',  pathMatch: 'full', component: HomeComponent  },
  { path: '',  redirectTo:  'home', pathMatch: 'full' },
  { path: '**', pathMatch: 'full',  component: PageNotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
