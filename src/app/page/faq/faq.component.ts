import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { Subscription } from 'rxjs';
import { LightModeService } from 'src/app/light-mode.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css',],
})
export class FAQComponent implements OnInit, OnDestroy {

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



  clickPanel(event: Event) {
    // Récupérez l'élément parent contenant l'icône cliquée
    const icon = event.currentTarget as HTMLElement;
    const questionTop = icon.closest('.question-top');

    // Vérifiez si l'élément parent a été trouvé
    if (questionTop) {
      // Trouvez l'élément .question parent
      const question = questionTop.closest('.question');

      // Vérifiez si l'élément .question parent a été trouvé
      if (question) {
        question.classList.toggle('openPanel');
      }
    }
  }


  clickContact(){
    const contactbutton = gsap.timeline({defaults: {duration: .5, ease: "power1.out"}});

    
    contactbutton.to("#button-contact", {   opacity:0, display:'none'  });
    // if (window.matchMedia("(min-width: 600px)").matches) {
    //   contactbutton.to("#have-questions", {  height: '600', duration: .3  });
    // }
    contactbutton.to("#have-questions", {  height: '600', duration: .3  },'<25%');
    contactbutton.fromTo("form",{   opacity:0   }, {  display:'flex', opacity:1, duration: 1 });

    

  }

  
}


