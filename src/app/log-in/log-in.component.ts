import { Component } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  ischecked:boolean = false;

  changeCheck(event: Event) {
    const target = event.target as HTMLInputElement; // Assertion de type
    this.ischecked = target.checked;
  }  
}
