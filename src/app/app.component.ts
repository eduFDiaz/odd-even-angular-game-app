import { Component } from '@angular/core';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'odd-even-game-app';
  oddNumbers: number [] = [];
  evenNumbers: number [] = [];

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.oddNumbers.push(firedNumber);
    }
    else {
      this.evenNumbers.push(firedNumber);
    }
  }
}
