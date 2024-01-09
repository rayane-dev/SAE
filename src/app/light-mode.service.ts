import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LightModeService {

  
  private darkMode = new BehaviorSubject<boolean>(this.getStoredTheme());

  toggleDarkMode() {
    const current = this.darkMode.value;
    this.darkMode.next(!current);
    localStorage.setItem('darkMode', (!current).toString());

    if (!current) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  getDarkModeStatus() {
    return this.darkMode.asObservable();
  }

  private getStoredTheme(): boolean {
    const storedTheme = localStorage.getItem('darkMode');
    return storedTheme === 'true' ? true : false;
  }
}
