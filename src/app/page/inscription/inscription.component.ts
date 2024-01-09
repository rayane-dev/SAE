import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LightModeService } from 'src/app/light-mode.service';



@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css',],
})
export class InscriptionComponent  {
  illustration: string = "../../assets/ressources/illustration.png";
  logo: string = "../../assets/images/IUT GUSTAVE EIFFEL.png";
  

  constructor(private LightModeService: LightModeService) {}

  toggleDarkMode() {
    this.LightModeService.toggleDarkMode();
  }

  isDarkMode: boolean = false;
  private subscription: Subscription = new Subscription();


  ngOnInit() {
    this.subscription = this.LightModeService.getDarkModeStatus().subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
