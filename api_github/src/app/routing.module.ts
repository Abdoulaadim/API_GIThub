import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';

export const appRouteList: Routes = [
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "followers",
        component: GithubFollowersComponent
      },
      {
        path: "followers/:id/:username", // segment dynamique
        component: ProfileFollowerComponent
      },
      {
        path: "posts",
        component: PostsComponent
      },
      {
        path: "**",
        component: PageNotFoundComponent
      },
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(appRouteList)
    ]
})
export class RoutingModule {}
