import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  /*
  <=> 
    constructor(private http: HttpClient){

    }
    */
  products: Array<any> =[];
  private http:HttpClient;
  constructor(http:HttpClient){
    this.http = http;
  }
  ngOnInit(): void {
    this.http.get<Array<any>>("http://localhost:8089/products")
              .subscribe({
                next: data => {
                  this.products = data
                },
                error: err => {
                  console.log(err)
                }
              })
  }
 
  public check(product: any) {
    this.http.patch<any>(`http://localhost:8089/products/${product.id}`,
    {checked:!product.checked}).subscribe({
      next: updatedProduct => {
        product.checked=!product.checked;
      }
    })
  }
}
