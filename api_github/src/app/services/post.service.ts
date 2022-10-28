import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/catch';//gestion des erreurs
// import 'rxjs/add/observable/throw';
// import { Observable } from 'rxjs';
// import { AppError } from 'src/common/app-error';
// import { NotFoundError } from 'src/common/not-found-error';
// import { BadInput } from 'src/common/bad-input';


@Injectable({
  providedIn: 'root'
})
export class PostService  extends DataService{


  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http);
   }

  // private Url = 'https://jsonplaceholder.typicode.com/posts';
  // constructor(private  http: HttpClient) { }

  // getPosts(){
    
  //   return  this.http.get(this.Url)
  //     .catch(this.handleError)
  // }

  // // createPost(post :any){
  // //   return this.http.post(this.Url, post)
  // //   .catch((error : Response ) => {
  // //     if(error.status === 400){
  // //       return Observable.throw(new BadInput);
  // //     }
  // //     return Observable.throw(new AppError)
  // //   })
  // // }

  // createPost(post :any){
  //   return this.http.post(this.Url, post)
  //       .catch(this.handleError)
  // }

  // updatePost(post :any){
  //   return  this.http.put(this.Url+'/'+post.id, post)
  //       .catch(this.handleError)
  // }

  // // updatePost(post :any){
  // //   return  this.http.put(this.Url+'/'+post.id, post)
  // // }

  // // Delete(post : any ){
  // //   return this.http.delete(this.Url+'/'+post.id)
  // //       .catch((error : Response ) => {

  // //         if(error.status === 404){
  // //           return Observable.throw(new NotFoundError);
  // //         }
  // //         return Observable.throw(new AppError)
  // //       })
  // // }

  // deletePost(post : any ){

  //   return this.http.delete(this.Url+'/'+post.id)
  //       .catch(this.handleError) 
  // }



  // private handleError (error:Response): Observable<never>{

  //   if(error.status === 404){
  //     return Observable.throw(new NotFoundError);
  //   }
  //   if(error.status === 400){
  //     return Observable.throw(new BadInput);
  //   }
  //   return Observable.throw(new AppError)

  // }
}
