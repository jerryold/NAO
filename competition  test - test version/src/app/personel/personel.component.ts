import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef,NgZone } from '@angular/core';
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

import { DrawerModule } from "@nativescript-community/ui-drawer/angular";
@Component({
    selector: "Personel",
    moduleId:module.id,
    templateUrl: "./personel.component.html",
    styleUrls: ['./personel.component.css']
   
    
})
export class PersonelComponent implements AfterViewInit, OnInit{ 
    
    private _mainContentText: string;

    constructor(private _changeDetectionRef: ChangeDetectorRef) { }

    @ViewChild("sidedrawerId") public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        //fairly certain this statement is never entered
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {

     }

     public openDrawer() {
         console.log("Drawer method reached"); 
         console.log(this.drawer); //returns undefined
         this.drawer.showDrawer();
     }

     public onCloseDrawerTap() {
         this.drawer.closeDrawer();
     }
    
    // public latitude: number;
    // public longitude: number;
    // private watchId: number;

    // public constructor(private zone: NgZone) {
    //     this.latitude = 0;
    //     this.longitude = 0;
    // }

    // private getDeviceLocation(): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //         Geolocation.enableLocationRequest().then(() => {
    //             Geolocation.getCurrentLocation({timeout: 10000}).then(location => {
    //                 resolve(location);
    //             }).catch(error => {
    //                 reject(error);
    //             });
    //         });
    //     });
    // }

    // public updateLocation() {
    //     this.getDeviceLocation().then(result => {
    //         this.latitude = result.latitude;
    //         this.longitude = result.longitude;
    //     }, error => {
    //         console.error(error);
    //     });
    // }

    // public startWatchingLocation() {
    //     this.watchId = Geolocation.watchLocation(location => {
    //         if(location) {
    //             this.zone.run(() => {
    //                 this.latitude = location.latitude;
    //                 this.longitude = location.longitude;
    //             });
    //         }
    //     }, error => {
    //         alert(error);
    //     }, { updateDistance: 1, minimumUpdateTime: 1000 });
    // }

    // public stopWatchingLocation() {
    //     if(this.watchId) {
    //         Geolocation.clearWatch(this.watchId);
    //         this.watchId = null;
    //     }
    // }
}