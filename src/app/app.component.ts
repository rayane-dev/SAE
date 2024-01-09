import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import {  Event as NavigationEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { LightModeService } from 'src/app/light-mode.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css',]
})

export class AppComponent implements OnInit {


  
  
  
  
  @Input() showHeader: boolean = true;
  @Input() showFooter: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, private LightModeService: LightModeService) {}




  

 
  

  ngOnInit() {
    


    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('route change', event)
        if (event.url === '/inscription') {
          this.showHeader = false;
          this.showFooter = false;
        }
        else if (event.url === '/inscription/statistique'){
          this.showHeader = true;
          this.showFooter = false;
        }

        else {
          this.showHeader = true;
          this.showFooter = true;
        }
      }
    })

    this.LightModeService.getDarkModeStatus().subscribe((isDarkMode) => {
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });

    

    
  }
  


}
  
  



