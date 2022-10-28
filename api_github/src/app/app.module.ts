import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { PostService } from './services/post.service';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoutingModule } from './routing.module';


// const routes : Routes = [
//       {
//         path: "home",
//         component: HomeComponent
//       },
//       {
//         path: "followers",
//         component: GithubFollowersComponent
//       },
//       {
//         path: "followers/:username", // segment dynamique
//         component: ProfileFollowerComponent
//       },
//       {
//         path: "posts",
//         component: PostsComponent
//       },
//       {
//         path: "**",
//         component: PageNotFoundComponent
//       },

// ]

@NgModule({
  declarations: [
    AppComponent,
    GithubFollowersComponent,
    PostsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
    // RouterModule.forRoot(routes)
    
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
