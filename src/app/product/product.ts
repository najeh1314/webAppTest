import { HttpClient } from "@angular/common/http";
import { Component, OnInit} from "@angular/core";
import { Http2SecureServer } from "node:http2";

@Component({
    selector:'app-product',
    templateUrl:'./product.html',
    styleUrl:'./product.css'
})
export class Product implements OnInit{
    products: Array<any> = [];
    private http: HttpClient;

    constructor(http: HttpClient){
        this.http = http;
    }

    ngOnInit(): void {
        this.http.get<Array<any>>("http://localhost:8089/products")
                .subscribe({
                    next: data =>{
                        this.products = data;
                    },
                    error: err =>{
                        console.log(err);
                    }     
                })    
    }

}