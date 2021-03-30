import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
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
export class ArticleComponent implements AfterViewInit,OnInit
{ 
   
    public item:Array<any>=new Array<any>();
    items: { name: string, desc: string, price: string, imageSrc: string }[] = [
        { name: "Pancakes!", desc: "Everybody* loves gluten.", price: "$5", imageSrc: "https://placem.at/things?w=500&txt=0&random=9" },
       
    ];


    public article:Array<any> = new Array<any>();//因為會有多筆，先建一個any型別的陣列資料來接回傳值
    private _mainContentText: string;

    
    constructor(
        private _changeDetectionRef: ChangeDetectorRef,
        private router:Router, 
        private postService:PostService) 
    { 
        // this.article=[];
        
    }

    @ViewChild("sidedrawerId") public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        //fairly certain this statement is never entered
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
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
                // alert(this.article)
                
                console.log(this.article);
               
                
            },
            (error:HttpErrorResponse)=>this.postService.HandleError(error)
        );

    }
    public openDrawer() {
        console.log("Drawer method reached"); 
        console.log(this.drawer); //returns undefined
        this.drawer.showDrawer();
    }

    public onCloseDrawerTap() {
        this.drawer.closeDrawer();
    }

    public Backpage() {
        this.router.navigate(["post"]);
    }
   
    
    
    
   
   

   
}
        
