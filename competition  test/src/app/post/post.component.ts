import { Component, OnInit } from "@angular/core";
import { Application } from "@nativescript/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";



@Component({
    selector: "Post",
    templateUrl: "./post.component.html",
    styleUrls: ['./post.component.css']
   
    
})
export class PostComponent  { 
    
    constructor() {
        // Use the component constructor to inject providers.
    }
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView();
        sideDrawer.showDrawer();
    }
}