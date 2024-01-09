import { Component, ElementRef, Renderer2, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import SimpleParallax from 'simple-parallax-js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Subscription } from 'rxjs';
import { LightModeService } from 'src/app/light-mode.service';







@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css',]
})

export class HomeComponent implements AfterViewInit {
  title = 'IUT-MEAUX';
  main_character: string = './assets/images/image copie.png';
  robot_character: string = './assets/images/robot character2.png'
  pebble_character: string = './assets/images/Pebble character.png'
  explorer_character: string = './assets/images/explorer character.png'
  aero_character: string = './assets/images/aero character.png'
  blob: string = './assets/ressources/blob.png';
  blur_snd: string = './assets/ressources/blur2.png'
  IUT_picture: string = './assets/images/IUT-picture.jpeg';
  profil: string = './assets/ressources/profil.png';


  private scrollPosition = 0;
  private currentTranslation = 0;
  

  constructor(private el: ElementRef, private LightModeService: LightModeService, private renderer: Renderer2) {
    gsap.registerPlugin();
    gsap.registerPlugin(ScrollTrigger);
  }


  

  clickRight() {
    this.currentTranslation += -400; // Augmenter la translation de 400px
    const cards = document.querySelectorAll('#wrapper-card-ui .card');
    cards.forEach(card => {
      this.renderer.setStyle(card, 'transform', `translateX(${this.currentTranslation}px)`);
    });
  }

  clickLeft() {
    this.currentTranslation += 400; // Augmenter la translation de 400px
    const cards = document.querySelectorAll('#wrapper-card-ui .card');
    cards.forEach(card => {
      this.renderer.setStyle(card, 'transform', `translateX(${this.currentTranslation}px)`);
    });
  }
  

  toggleDarkMode() {
    this.LightModeService.toggleDarkMode();
  }

  isDarkMode: boolean = false;
  private subscription: Subscription = new Subscription();


 

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  

  

 

  
  
  ngOnInit(): void {

    const loader = gsap.timeline({defaults: {duration: 4, ease: "power1.out"}});

    loader.fromTo("header .left img", {y:50, opacity: 0, zIndex:10}, {y:0, opacity: 1, duration: .2, delay:.5, ease: "ease: sine.out", stagger: .2 });
    loader.fromTo("header .nav-item", {y:50, opacity: 0, zIndex:10}, {y:0, opacity: 1, duration: .1, ease: "ease: sine.out", stagger: .25 }, '<50%');

    loader.fromTo("main", {y: 20,opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: "ease: sine.out", stagger: 5 }, '<');
    loader.fromTo(".card-part", {opacity: 0}, { opacity: 1, duration: 1, ease: "ease: sine.out", stagger: 5 }, '<10%');


    



    // const tlIntro = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "body",
    //     start: "0%",
    //     // endTrigger: "main",
    //     end: "5%",
    //     pin: true,
    //     markers: { startColor: "red", endColor: "red" },
    //   },
    // });


    const tlIntro = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "5%",
        pin: false,
        // pinSpacing:true,
        scrub: 1,
      },
    });

    

     // BLOB disparition au scroll
     tlIntro.to("#blob1", {  x: -400, y: 600  , scale: 5, opacity: 0,  });
     tlIntro.to("#blob2", {  x: -800  , scale: 2.5, opacity: 0 },'<');
     tlIntro.to("#blob3", {  x: -200, y: -400  , scale: 10, opacity: 0, },'<');
     tlIntro.to("#blob4", {  x: 700, y: -400  , scale: 10, opacity: 0 },'<');
     tlIntro.to("#blob5", {  x: 200, y: 400  , scale: 10, opacity: 0 },'<');
     // Hero disparition au scroll
     tlIntro.to("main .right", {  scale: 1.1, opacity: 0 },'<25%');
     tlIntro.to("main .left", {  scale: 1.1, opacity: 0 },'<');
 
    
 
    //Presentation PART
    
     
     

     if(this.isDarkMode == true){
      gsap.to("#presentation h2", {
        delay:1,
        opacity:1,
        stagger: 1,
        color : '#111',
        scrollTrigger: {
          trigger: "#presentation",
          // pin: true, // Activer le pinning
          //  markers: { startColor: "blue", endColor: "blue" },
          scrub: true,
          start: "-90%",
          end: "0%",
         },
       });

       gsap.to("#presentation span", {
        stagger: .5,
        opacity: 1,
        color: '#111',
        scrollTrigger: {
          trigger: "#presentation",
          // pin: true, // Activer le pinning
         //  markers: { startColor: "blue", endColor: "blue" },
          scrub: true,
          start: "-80%",
          end: "60%",
        },
      });
     }else{
      gsap.to("#presentation h2", {
         delay:1,
         opacity:1,
         color: '#fff',
         stagger: 1,
         scrollTrigger: {
           trigger: "#presentation",
           // pin: true, // Activer le pinning
          //  markers: { startColor: "blue", endColor: "blue" },
           scrub: true,
           start: "-90%",
           end: "0%",
         },
       });

       gsap.to("#presentation span", {
        color: '#fff',
        stagger: .5,
        scrollTrigger: {
          trigger: "#presentation",
          // pin: true, // Activer le pinning
         //  markers: { startColor: "blue", endColor: "blue" },
          scrub: true,
          start: "-80%",
          end: "65%",
        },
      });

     }

     //Exploration PART
    const ratio: number = 0.3;
    const options: IntersectionObserverInit = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
    };

    const handleIntersect: IntersectionObserverCallback = function(entries, observer) {
      entries.forEach(function(entry) {
          if (entry.intersectionRatio > ratio) {
              entry.target.classList.add('reveal-visible');
              observer.unobserve(entry.target);
          }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    document.querySelectorAll('.reveal').forEach(function(r) {
        observer.observe(r as Element);
    });
 

    this.subscription = this.LightModeService.getDarkModeStatus().subscribe(isDark => {
      this.isDarkMode = isDark;
    });
}


ngAfterViewInit() {
  const thumbnails = this.el.nativeElement.getElementsByClassName('thumbnail');
  new SimpleParallax(thumbnails, {
    orientation: 'right',
    overflow: false,
  });

}



}

