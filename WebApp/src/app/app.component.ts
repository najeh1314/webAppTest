import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public currentAction: any;
  public setCurrentAction(value: any) {
    this.currentAction = value;
  }

  actions: Array<any> = [
    {title: "Home", route:"/home", icon:"house"},
    {title: "Products", route:"/products", icon:"search"},
    {title: "New Product", route:"/new-product", icon:"plus"}
  ]
}
