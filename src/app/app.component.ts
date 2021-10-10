import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SDAJavascriptRemoteLT3Testing';
  name: string = '';
  showGreeting: boolean = false;

  displayName(): void {
    this.showGreeting = !this.showGreeting
  }
}
