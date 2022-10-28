import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts :  [] | any; 
  status : boolean =true;
  post : any = {
    id :0,
    title : '', 
    body :'',
    userId :''
  };
  constructor(private postService : PostService) {

   }

  ngOnInit(): void {
    this.getPosts();
  }

  // getPosts(){
  //     this.postService.getALL()
  //       .subscribe(response =>{
  //           this.posts = response;
          
  //       },error => {
  //           alert('error inattendu');
  //           console.log(error);
            

  //       } )
  // }

  getPosts(){
    this.postService.getALL()
      .subscribe(posts => this.posts = posts,
          error => {
          alert('error inattendu');
          console.log(error);
          

      } )
}
  createPost(){
    this.postService.create(this.post)
      .subscribe(newPost => {
      // console.log(response);
      this.post.id = newPost;
      //this.posts.push(this.post);
      this.posts.unshift(this.post); // ajouter en premier 
      
      //initialisation input 
      this.post ={
        id :0,
        title : '', 
        body :'',
        userId  :0
      };
    },(error : AppError) => {
      
      if(error instanceof BadInput) {
        alert('Merci de vérifié vos information !! ')
      }else{
        alert('error inattendu');
      }
    })

}
  // createPost(){
  //     this.postService.createPost(this.post)
  //       .subscribe(response => {
  //       // console.log(response);
  //       this.post.id = response;
  //       //this.posts.push(this.post);
  //       this.posts.unshift(this.post); // ajouter en premier 
        
  //       //initialisation input 
  //       this.post ={
  //         id :0,
  //         title : '', 
  //         body :'',
  //         userId  :0
  //       };
  //     },error => {
  //       alert('error inattendu');
  //       console.log(error);
  //     })

  // }

  editPost(post : any){

    this.post = post;
    this.status =false;
    

  }

  updatePost(){
    // this.postService.updatePost(this.post)
    this.postService.update(this.post)
      .subscribe(() => {
        this.post  = {
          id :0,
          title : '', 
          body :'',
          userId  :0
        };

      },(error : AppError) => {
        if(error instanceof BadInput) {
          alert('Merci de vérifié vos information !! ')
        }else{
          alert('error inattendu');
        }
      })
        
        
      // },error => {
      //   alert('error inattendu');
      //   console.log(error);})
      // this.status = true;
  }

  // Delete(post : any ){
  //   this.postService.Delete(post)
  //     .subscribe(response => {
  //       let index  = this.posts.indexOf(post);
  //       this.posts.splice(index, 1)
  //     },(error : Response)  => {
  //       if(error.status === 404) {
  //         alert('Ce message est déjà supprimé !! ')
  //       }else{
  //         alert('error inattendu');
  //         console.log(error)
  //       }
  //     })
  //   }

  Delete(post : any ){
    this.postService.delete(post)
      .subscribe(() => {
        let index  = this.posts.indexOf(post);
        this.posts.splice(index, 1)
      },(error : AppError)  => {
        if(error instanceof NotFoundError) {
          alert('Ce message est déjà supprimé !! ')
        }else{
          alert('error inattendu');
          console.log(error)
        }
      })
    }

}
