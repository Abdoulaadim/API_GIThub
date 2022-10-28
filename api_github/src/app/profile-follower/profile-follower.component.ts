import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-follower',
  templateUrl: './profile-follower.component.html',
  styleUrls: ['./profile-follower.component.css']
})
export class ProfileFollowerComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id : number | undefined ;
  username : string | undefined;

  id1 : any;
  username1 :any ;
  page : any;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
       console.log(params);
    })

    this.id1 = this.route.snapshot.paramMap.get('id');
    this.username1 = this.route.snapshot.paramMap.get('username');


    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.username = params['username'];
   })

   //queryparametre
   this.route.queryParamMap.subscribe(queryParams=>{
      console.log(queryParams.get('type'));
      console.log(queryParams.get('page'));
      
   });

   this.page =  this.route.snapshot.queryParamMap.get('page');
  }

}
