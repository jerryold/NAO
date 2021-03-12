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
export class ArticleComponent implements OnInit
{ 
    public article: object;
    // public item:Array<any>=new Array<any>();
    public item:object;
    
    constructor(
        private router:Router, 
        private postService:PostService) 
    { 
        this.article={};
        this.item=[];
    }
    ngOnInit()
    {
        this.getData();
    }
    // submit3()
    // {
    //     this.getData();
    // }
    getData(){
        this.postService.Article()
        .subscribe(
            (response)=>{
                this.item=response;
                alert(JSON.stringify(this.item))
                // console.log(this.item);
            },
            (data)=>alert(JSON.stringify(data))
        );

    }
   
   

   
}
        
