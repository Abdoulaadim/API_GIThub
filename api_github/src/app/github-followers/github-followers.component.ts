import { Component, OnInit } from '@angular/core';
import { GithubFollowesServiceService } from '../services/github-followes-service.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers : any[] = [];

  constructor(private service: GithubFollowesServiceService) { }

  ngOnInit(): void {
    this.service.getALL()
        .subscribe(followers => this.followers = followers);
  }

}
