import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {



  constructor() { 
    console.log("app-schools constructors loading");
  }

  ngOnInit() {
    console.log("app-schools ngOnInit loading");
  }

}
