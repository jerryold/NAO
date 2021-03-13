import { Component, OnInit } from "@angular/core";
import { DataManager, Query } from '@syncfusion/ej2-data';
import {Router} from '@angular/router';
import { Post } from "../shared/post/post";
import {PostService} from '../shared/post/post.service';
import { Observable } from 'rxjs';
import { from } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";



@Component({
    selector: "Post",
    providers:[PostService],
    moduleId: module.id,
    templateUrl: "./article.component.html",
    styleUrls: ['./article.component.css']
   
    
})
export class ArticleComponent implements OnInit
{ 
   
    // public item:Array<any>=new Array<any>();
    
    public article:Array<any> = new Array<any>();//因為會有多筆，先建一個any型別的陣列資料來接回傳值
    constructor(
        private router:Router, 
        private postService:PostService) 
    { 
        // this.article=[];
        
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
            (response:any)=>{
                this.article=response;
                alert(this.article)
                
                console.log(this.article);
               
                
            },
            (error:HttpErrorResponse)=>this.postService.HandleError(error)
        );

    }
    
   
   

   
}
        
