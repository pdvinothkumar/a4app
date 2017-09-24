import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  name:string;
  age:number;
  address: Address;
  hobbies:string[];
  reason:any;
  posts:Post[];


  

  constructor(private dataService:DataService) {
    console.log('construtor log....');
   }

  ngOnInit() {
    console.log('ngOnInit log....');

    // initialize the property
    this.name = 'Aarya';
    this.age = 3;
    this.address = {
      street:'Section14',
      city:'PJ',
      state:'Selangor'
    };
    this.hobbies = ['play with cars','watch ryhmes','listen to music'];
    this.reason = 'Aarya is Naughty & intelligent boy';

    this.dataService.getPosts().subscribe((posts) =>{
      //console.log(posts);

      this.posts = posts;
    });

  }

  onClick(){
    console.log('Hello');
    this.name = 'Aarya Kutti';
    this.hobbies.push('new hobby');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    console.log(hobby);

    for(let i=0;i<this.hobbies.length;i++){
      if(this.hobbies[i] == hobby){
          this.hobbies.splice(i,1);
      }
    }

  }

}

interface Address {
  street:string,
  city:string,
  state:string
}

interface Post {
  id: number,
  title: string,
  body:string,
  userId: number

}
