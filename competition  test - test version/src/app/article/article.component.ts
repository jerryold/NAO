import { Component, OnInit } from "@angular/core";
import { DataManager, Query } from '@syncfusion/ej2-data';
import {Router} from '@angular/router';
import { Post } from "../shared/post/post";
import {PostService} from '../shared/post/post.service';
import { NativeScriptCommonModule } from "@nativescript/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptFormsModule } from "@nativescript/angular";
import { HttpErrorResponse } from "@angular/common/http";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';



@Component({
    selector: "Post",
    providers:[PostService],
    moduleId: module.id,
    templateUrl: "./article.component.html",
    styleUrls: ['./article.component.css']
   
    
})
export class ArticleComponent implements OnInit
{ 
   
    public item:Array<any>=new Array<any>();
    items: { name: string, desc: string, price: string, imageSrc: string }[] = [
        { name: "Pancakes!", desc: "Everybody* loves gluten.", price: "$5", imageSrc: "https://placem.at/things?w=500&txt=0&random=9" },
        { name: "Bowl of Crap", desc: "Probably something in here. But probably not.", price: "$1", imageSrc: "https://placem.at/things?w=500&txt=0&random=6" },
        { name: "Motorcycle", desc: "It'll be worth the argument with your spouse.", price: "$8899", imageSrc: "https://placem.at/things?w=500&txt=0&random=1" },
        { name: "Air Plant", desc: "It looked cool in the store.", price: "$9", imageSrc: "https://placem.at/things?w=500&txt=0&random=2" },
        { name: "Cuff Links", desc: "You'll need them once in the next ten years.", price: "$59", imageSrc: "https://placem.at/things?w=500&txt=0&random=4" },
        { name: "Skateboard", desc: "Too bad you are too old to use it.", price: "$129", imageSrc: "https://placem.at/things?w=500&txt=0&random=7" },
        { name: "Off-Brand Soda", desc: "Desperate times we live in.", price: "$2", imageSrc: "https://placem.at/things?w=500&txt=0&random=8" },
        { name: "Beer? Liquor?", desc: "Mmmmm drinky.", price: "$7", imageSrc: "https://placem.at/things?w=500&txt=0&random=10" },
        { name: "Pie!", desc: "Also good.", price: "$15", imageSrc: "https://placem.at/things?w=500&txt=0&random=11" }
    ];


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
        
