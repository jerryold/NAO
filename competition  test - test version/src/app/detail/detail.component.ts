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
import { RouterExtensions } from '@nativescript/angular'
var fileSystemModule = require("file-system");
var fileName = "persistedFile.json";
var file = fileSystemModule.knownFolders.documents().getFile(fileName);



@Component({
    selector: "Post",
    providers:[PostService],
    moduleId: module.id,
    templateUrl: "./detail.component.html",
    styleUrls: ['./detail.component.css']
   
    
})
export class DetailComponent implements AfterViewInit,OnInit
{ 
    public post: Post;
   
    itemId: number;
    item: Post;
    items: Array<Post>;
    itemimage: { name: string, desc: string, price: string, imageSrc: string }[] = [
        { name: "Pancakes!", desc: "Everybody* loves gluten.", price: "$5", imageSrc: "https://placem.at/things?w=500&txt=0&random=9" },
       
    ];


    public article1:Array<any> = new Array<any>();//因為會有多筆，先建一個any型別的陣列資料來接回傳值
    private _mainContentText: string;

    
    constructor(
        private _changeDetectionRef: ChangeDetectorRef,
        private router:Router, 
        private routerExtensions: RouterExtensions,
        private postService:PostService,
        ) 
    { 
        // this.page.actionBarHidden = true;

        // this.pageRoute.activatedRoute.pipe(
        //     switchMap(activatedRoute => activatedRoute.params)
        // ).forEach((params) => {
        //     this.itemId = +params["id"];            
        //     this.item = this.article1.filter(item => item.id == this.itemId)[0];
        // });
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
                this.article1=response;
                // alert(this.article)
                
                console.log(this.article1);
               
                
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
    onCloseTap(): void {
        this.routerExtensions.back();
    }
   
    public order(){
        this.postService.Order(this.post, file)
        alert("order success");

    }
    
    
    
   
   

   
}
        
