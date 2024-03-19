import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-hello',
  templateUrl: './user-hello.component.html',
  styleUrl: './user-hello.component.scss'
})
export class UserHelloComponent implements OnInit{
  private users:Array<{
    "firstName": string, "lastName": string, "userId": string, "mdp": string
    }> = [];
  private http: HttpClient;
  helloMessage: string = "Hello Mr "+ this.users[1].lastName;
  constructor(http: HttpClient){
    this.http = http;
    this.helloMessage = "";

  }
  private valideAuthentification: boolean = false;
  ngOnInit(): void {
    this.http.get<any>("http://localhost:8089/users")
              .subscribe({
                next: data =>{
                  this.users = data
                },
                error: err =>{
                  console.log(err);
                }
              })

  }

}
