import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LightModeService } from 'src/app/light-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',]
})
export class HeaderComponent implements OnInit, OnDestroy {
  /*Image*/
  logo: string = "../../assets/images/IUT GUSTAVE EIFFEL.png";
  button_sea_sunrise: string = "../../assets/ressources/Sea Sunrise.png";
  blur_one: string = "../../assets/ressources/Blur.png";

  /*element*/
  menu: string = "../../assets/ressources/menu.svg";
  chevron_right: string = "../../assets/ressources/chevron-right.svg"
  arrow_up_right: string = "../../assets/ressources/arrow-up-right.svg"




  onButtonClick(){ 
    const header: HTMLElement | null = document.querySelector('header');
  
    if (header && header.classList) {
      header.classList.toggle('open');
    }
  }

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

  // constructor(private lightmodeService: LightModeService) {}


  // darkMode(){ 
  //   const body: HTMLElement | null = document.querySelector('body');
  
  //   if (body && body.classList) {
  //     body.classList.toggle('dark');
  //   }
  // }
  // darkMode() {
  //   const body = document.querySelector('body');
  
  //   if (body) {
  //     // Basculer le dark mode
  //     body.classList.toggle('darkmode');
  
  //     // Sauvegarder l'état dans le stockage local
  //     if (body.classList.contains('darkmode')) {
  //       localStorage.setItem('darkMode', 'enabled');
  //     } else {
  //       localStorage.setItem('darkMode', 'disabled');
  //     }
  //   }
  // }


  // colorMode = 'darkMode';

  // darkMode(){
  //   if(this.colorMode === 'darkMode'){
  //     this.colorMode = 'lightMode';
  //   }else{
  //     this.colorMode ='darkMode'
  //   }
  // }

 






  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.start(event);
  }
  private start(event: Event) {
    const header: HTMLElement | null = document.querySelector('header');
    
    const windowWidth = window.innerWidth;
    
  
    
    if (windowWidth >= 1000) {
      if (header && header.classList) {
        console.log('sddsds');
        header.classList.remove('open');
        
      }
    }
    
    // Ajoutez ici votre logique supplémentaire en fonction du redimensionnement
  }

  // checkDarkMode() {
  //   const body = document.querySelector('body');
  //   const darkModeStatus = localStorage.getItem('darkMode');
  
  //   if (body && darkModeStatus === 'enabled') {
  //     body.classList.add('darkmode');
  //   }
  // }

  // ngOnInit() {
  //   this.checkDarkMode();
  // }




}



