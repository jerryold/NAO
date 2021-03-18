import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef} from "@angular/core";
import {Router} from "@angular/router";
import { Color } from "@nativescript/core/color";
import * as colors from "@nativescript/core/color/known-colors";
import { isKnownName } from "@nativescript/core/color/known-colors"
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./intro1.component.html",
    styleUrls: ['./intro1.component.css']
})
export class Intro1Component  implements AfterViewInit,OnInit{

   constructor(
       
    private _changeDetectionRef: ChangeDetectorRef,
    private router: Router) 
    
    {
        
        // Use the component constructor to inject providers.
    }

    @ViewChild("sidedrawerId") public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        //fairly certain this statement is never entered
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }
    public submit()
    {
        this.router.navigate(["intro2"]);
    }
    
    ngOnInit(): void {
        // Init your component properties here.
    }
    
}
