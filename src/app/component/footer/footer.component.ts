import { Component,  OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LightModeService } from 'src/app/light-mode.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html', 
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
 
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
