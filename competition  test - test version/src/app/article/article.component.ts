import { Component, OnInit } from "@angular/core";
import { DataManager, Query } from '@syncfusion/ej2-data';
import {Router} from '@angular/router';
import { Post } from "../shared/post/post";
import {PostService} from '../shared/post/post.service';
import { Observable } from 'rxjs';
import { from } from "rxjs";



@Component({
    selector: "Post",
    providers:[PostService],
    moduleId: module.id,
    templateUrl: "./article.component.html",
    styleUrls: ['./article.component.css']
   
    
})
export class ArticleComponent 
{ 
    public article: Post;
    public data:object;
    
    
    

    constructor(
        private router:Router, 
        private postService:PostService) 
    {
        this.article=new Post();
        this.data={};
        
    }
    public submit()
    {
       
        this.text();
        if(this.data.toString()=="Welcome back!"){
            
            
            this.router.navigate(['/post']);
        }
        else{
            
        }
       
    }
    public toggleDisplay()
    {
        // this.isLoggingIn= !this.isLoggingIn;
        this.router.navigate(['/signup']);
    }
   
    private text()
    {
       
        this.postService.Publish(this.article)
        .subscribe(
            
            (data) => 
            {
                alert(data);
                this.data=data;
                
                
            },
            () => 
            {
                alert('Unfortunately we could not find your account.');
            }
        );
    }

   
}
        
