import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practicakike';

  /**
   *
   */
  constructor(private route: Router) {
    
  }

  navigateToAuth() {
    this.route.navigate(['/auth'])
    debugger
  }

  navigateToPage() {
    this.route.navigate(['/page'])

  }
}
