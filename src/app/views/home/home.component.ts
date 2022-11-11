import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  haneen:string="hanoon";

  test = {
    name :"hanoon",
    age : "23",
  }



  ngOnInit(): void {
  }

}
