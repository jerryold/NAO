import { Component, OnInit } from "@angular/core";
import { Application } from "@nativescript/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import {Router} from '@angular/router';
import { Post } from "../shared/post/post";
import {PostService} from '../shared/post/post.service';
import * as camera from "@nativescript/camera";
import { Image } from "@nativescript/core";
import { ImageSource, knownFolders, path } from '@nativescript/core';
import * as fs from "@nativescript/core/file-system";
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
var fileSystemModule = require("file-system");
var fileName = "persistedFile.json";
var file = fileSystemModule.knownFolders.documents().getFile(fileName);
var imageModule = require("@nativescript/core/ui/image");
const imageSource = require('@nativescript/core/image-source')
 
var options = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: true };




// var email = file.readText().then(function(content) {
//     // alert(content);
//     // JSON.parse(content);
//     return JSON.parse(content).email;
//   })

// const printAddress = () => {
//     email.then((a) => {
//         alert(a);
//     });
// };

@Component({
    selector: "Post",
    providers:[PostService],
    moduleId: module.id,
    templateUrl: "./post.component.html",
    styleUrls: ['./post.component.css']
   
    
})
export class PostComponent  implements OnInit{ 
    
    public post: Post;
    public bstring;
    public saveImage;
    public picHeight;

    

    constructor(
        private router:Router, 
        private postService:PostService
        ) 
    {
        
        this.post=new Post();
    }

    public submit2()
    {
       this.publish();
              
    }
    ngOnInit() {
       this.getPermission();
    }
    private publish()
    {   
        // this.post.by= file.readText().then(function(content) {
        //     alert(content);
        //     JSON.parse(content);
        //     return JSON.parse(content).email;
        //   });
        // alert(JSON.stringify(this.post));
        this.postService.Publish(this.post, file)
        this.router.navigate(['/article']);
            // .subscribe(
            //     (data) => {   //function()
            //         alert(data);
                    
            //         this.router.navigate(['/article']);

                    
            //     },
            //     () => alert('Unfortunately we were unable to create your publish.')
            // );
    }
    photo(){
       
        camera.takePicture(options)
        .then((imageAsset) => {
            console.log("Result is an image asset instance");
            var image = new Image();
            image.src = imageAsset;
        }).catch((err) => {
            console.log("Error -> " + err.message);
        });
        
    //     const source = new ImageSource();



    }
    // photo(){
    //     camera.takePicture(options).
    //     then((imageAsset) => {
    //         console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
    //         console.log("keepAspectRatio: " + imageAsset.options.keepAspectRatio);
    //         console.log("Photo saved in Photos/Gallery for Android or in Camera Roll for iOS");
    
    //         const imgPhoto = new ImageSource();
    
    //         const that = this;
    
    //         imgPhoto.fromAsset(imageAsset).then((imgSrc) => {
    //             if (imgSrc) {
    
    //                 // This is the base64 string, I saved it to a global variable to be used later
    //                 that.bstring = imgSrc.toBase64String("jpg");
    
    //                 console.log(that.bstring);
    
    //                 // This bit saves it as an 'Image' to the app
    //                 const mil = new Date().getTime();
    //                 const folder = fs.knownFolders.documents();
    //                 const path = fs.path.join(folder.path, `SaveImage${mil}`);
    //                 const saved = imgPhoto.saveToFile(path, "png");
    
    //                 // This saves the image to the global variable which will be used to display it on the screen
    //                 that.saveImage = path;
    //                 that.picHeight = imgSrc.height;
    
    //             } else {
    //                 alert("Image source is bad.");
    //             }
    //         });
    //     }).catch((err) => {
    //         console.log("Error -> " + err.message);
    //     });
    // }
    getPermission() {
        camera.requestPermissions().then(
          function success() {
            console.log('granted');
          }, 
          function failure() {
            console.log('failure');
          }
          );
      }
     

    

    // onDrawerButtonTap(): void {
    //     const sideDrawer = <RadSideDrawer>Application.getRootView();
    //     sideDrawer.showDrawer();
    // }
}