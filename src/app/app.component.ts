import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webAppTry';
  public currentAction: any;
  public setCurrentAction(value: any){
  this.currentAction = value;
  }
  actions: Array<any> = [
    {titl:"Home", route:"home", icon:"house", classe:"btn btn-outline-dark ms-1"},
    {titl:"Products", route:"products", icon:"box2", classe:"btn btn-outline-dark ms-1"},
    {titl:"Services", route:"services", icon:"gear", classe:"btn btn-outline-dark ms-1"},
    {titl:"Contact us", route:"contact", icon:"telephone-fill", classe:"btn btn-light ms-1"}
  ]
}
