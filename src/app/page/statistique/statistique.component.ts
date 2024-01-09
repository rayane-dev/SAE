import { Component, OnInit, AfterViewInit} from '@angular/core';
import Chart from 'chart.js/auto';
import { Subscription } from 'rxjs';
import { LightModeService } from 'src/app/light-mode.service';

// Chart.register(LinearScale, BarElement, CategoryScale);







@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css',],
})


export class StatistiqueComponent implements OnInit { 
  main_character: string = './assets/images/image copie.png';

  constructor(private LightModeService: LightModeService) {}

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

  ngOnInit() {
    this.subscription = this.LightModeService.getDarkModeStatus().subscribe(isDark => {
      this.isDarkMode = isDark;
    });

    this.Graphic2();
    this.Graphic3();
    this.Graphic4();
  }

  Graphic2() {
    const ctx = document.getElementById('graphic2') as HTMLCanvasElement;
    const monGraphique = new Chart(ctx, {
      type: 'bar', // Changez le type selon vos besoins
      data: {
        labels: ['Janvier', 'Février', ], // Mettez vos données ici
        datasets: [{
          label: 'Statistiques',
          data: [{x: '2016-12-25', y: 20}, {x: '2016-12-26', y: 10}] ,// Mettez vos données ici
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 205, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      },
      
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
        
      }
    });
  }

  Graphic3() {
    const ctx = document.getElementById('graphic3') as HTMLCanvasElement;
    const monGraphique = new Chart(ctx, {
      type: 'doughnut', // Changez le type selon vos besoins
      data: {
        labels: ['Janvier', 'Février', ], // Mettez vos données ici
        datasets: [{
          label: 'Statistiques',
          data: [0, 10 ], // Mettez vos données ici
          // Autres configurations ...
        }]
      },
      options: {
        layout: {
          padding: 10,
        }
      }
    });
  }

  Graphic4() {
    const ctx = document.getElementById('graphic4') as HTMLCanvasElement;
    const monGraphique = new Chart(ctx, {
      type: 'doughnut',
  data: {
    datasets: [{
      data: [{id: 'Sales', nested: {value: 1500}}, {id: 'Purchases', nested: {value: 500}}]
    }]
  },
  options: {
    parsing: {
      key: 'nested.value'
    },
    layout: {
      padding: 30,
    }
  }
    });
  }

}
