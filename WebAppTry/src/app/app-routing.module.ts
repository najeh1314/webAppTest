import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponHomeComponent } from './compon-home/compon-home.component';
import { ComponProductsComponent } from './compon-products/compon-products.component';
import { ComponServicesComponent } from './compon-services/compon-services.component';
import { ComponContactComponent } from './compon-contact/compon-contact.component';
import { Product } from './product/product';
import { LogInComponent } from './log-in/log-in.component';
import { UserHelloComponent } from './user-hello/user-hello.component';

const routes: Routes = [
  {path: "home", component:ComponHomeComponent},
  {path: "products", component:ComponProductsComponent},
  {path: "services", component:ComponServicesComponent},
  {path:"contact", component:ComponContactComponent},
  {path:"product", component:Product},
  {path:"log-in", component:LogInComponent},
  {path:"user-hello", component: UserHelloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
